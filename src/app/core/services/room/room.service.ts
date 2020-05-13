import { StaticGameDataDto } from './dto/static-game-data.dto';
import { NotificationService } from './../notification/notification.service';
import { CommandsEnum } from './dto/commands/commands.enum';
import { AppStorageService } from './../app-storage/app-storage.service';
import { JoinOptionsDto } from './dto/join-options.dto';
import { ColyseusClientService } from './../colyseus/colyseus-client.service';
import { Injectable } from '@angular/core';
import { Client, Room } from 'colyseus.js';
import { GameStateDto } from './dto/game-state.dto';
import { Subject, BehaviorSubject } from 'rxjs';
import { AppStorageKeysEnum } from '../app-storage/app-storage-keys-enum';
import * as _ from 'lodash';
import { ClientMessageTypeEnum } from './dto/enum/client-message-type.enum';
import { NotificationPayloadDto } from './dto/notification-payload.dto';
import { NotificationTypeEnum } from './dto/enum/notification-type.enum';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  private state = new BehaviorSubject<GameStateDto>({} as GameStateDto);
  private roomSubject = new BehaviorSubject<Room<GameStateDto>>({} as Room<GameStateDto>);
  private staticGameDataSubject = new BehaviorSubject<StaticGameDataDto>({} as StaticGameDataDto);
  private room: Room<GameStateDto>;
  get isConnected() {
    return !!this.room;
  }

  constructor(
    private colyseusClient: ColyseusClientService,
    private appStorageService: AppStorageService,
    private notificationService: NotificationService
  ) {}

  getState() {
    return this.state.asObservable();
  }

  getRoom() {
    return this.roomSubject.asObservable();
  }

  getStaticGameData() {
    return this.staticGameDataSubject.asObservable();
  }

  sendCommand(command: CommandsEnum, options: any) {
    this.room.send(command, options);
  }

  createRoom(username: string) {
    this.colyseusClient
      .create<GameStateDto>('game_room', { username, isStoryteller: true } as JoinOptionsDto)
      .then((room) => {
        this.initSubjects(room);
        this.appStorageService.set(AppStorageKeysEnum.SessionId, room.sessionId);
      })
      .catch((e) => {
        this.notificationService.error(e);
      });
  }

  joinRoom(username: string, roomCode: string) {
    this.colyseusClient
      .joinById<GameStateDto>(roomCode, { username } as JoinOptionsDto)
      .then((room) => {
        this.initSubjects(room);
        this.appStorageService.set(AppStorageKeysEnum.SessionId, room.sessionId);
      })
      .catch((error) => {
        this.notificationService.error(error);
      });
  }

  registerMessageCallback<T = any>(type: string | number, callback: (message: T) => void) {
    this.room.onMessage(type, callback);
  }

  async attemptReconnect(roomCode: string): Promise<boolean> {
    const sessionId = this.appStorageService.getString(AppStorageKeysEnum.SessionId);
    if (sessionId) {
      try {
        const room = await this.colyseusClient.reconnect<GameStateDto>(roomCode, sessionId);
        this.initSubjects(room);
        return true;
      } catch (e) {
        this.notificationService.error(e);
        return false;
      }
    }
    return false;
  }

  private initSubjects(room: Room<GameStateDto>) {
    this.room = room;
    this.roomSubject.next(this.room);
    this.room.onStateChange((state) => {
      console.log('State:', state);
      if (this.state.getValue().canSeeGrimoirePlayerId !== this.roomSubject.getValue().sessionId) {
        this.state.next(state);
      }
    });
    this.room.onError((code, message) => {
      this.notificationService.error(message, `Error: ${code}`);
    });
    this.room.onMessage('error', (message) => {
      this.notificationService.error(message);
    });
    this.room.onMessage('grimoire_snapshot', (message) => {
      this.state.next(message);
    });
    this.room.onMessage('reset_state', () => {
      this.state.next(this.room.state);
    });
    this.room.onMessage(ClientMessageTypeEnum.StaticGameData, (message) => {
      console.log(message);
      this.staticGameDataSubject.next(message);
    });
    this.room.onMessage(ClientMessageTypeEnum.Notification, (message: NotificationPayloadDto) => {
      switch (message.type) {
        case NotificationTypeEnum.Info:
          this.notificationService.info(message.detail, message.summary);
          break;
      }
    });
  }
}
