import { Subscription } from 'rxjs';
import { AppStorageService } from './../../../core/services/app-storage/app-storage.service';
import { RoomService } from './../../../core/services/room/room.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CreateRoomDto } from 'src/app/core/services/room/dto/create-room.dto';
import { AppStorageKeysEnum } from 'src/app/core/services/app-storage/app-storage-keys-enum';
import { Router } from '@angular/router';
import { JoinOptionsDto } from 'src/app/core/services/room/dto/join-options.dto';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.less'],
})
export class LandingComponent implements OnInit, OnDestroy {
  hasConnectedToday: boolean;
  private subs = new Subscription();
  constructor(private roomService: RoomService, private appStorage: AppStorageService, private router: Router) {}

  ngOnInit() {
    this.getReconnectInfo();
    this.subs.add(
      this.roomService.getRoom().subscribe((room) => {
        if (room.id) {
          this.router.navigate(['room', room.id]);
        }
      })
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  createRoom(formValue: { username: string }) {
    this.roomService.createRoom(formValue.username);
  }

  joinRoom(formValue: { username: string; roomCode: string; spectator: boolean }) {
    const options = {
      username: formValue.username,
      spectator: formValue.spectator,
    } as JoinOptionsDto;
    this.roomService.joinRoom(formValue.roomCode.toUpperCase(), options);
  }

  reconnectToRoom() {
    this.roomService.attemptReconnect().then((success) => {
      if (!success) {
        this.appStorage.remove(AppStorageKeysEnum.LastConnectedOn);
        this.hasConnectedToday = false;
      }
    });
  }

  private getReconnectInfo() {
    const roomId = this.appStorage.getString(AppStorageKeysEnum.CurrentRoomCode);
    const sessionId = this.appStorage.getString(AppStorageKeysEnum.SessionId);
    const lastConnectedOn = this.appStorage.getString(AppStorageKeysEnum.LastConnectedOn);
    if (roomId && sessionId && lastConnectedOn) {
      if (this.lastConnectedToday(parseInt(lastConnectedOn, 10))) {
        this.hasConnectedToday = true;
      }
    }
  }

  private lastConnectedToday(lastConnectedOn: number) {
    const today = new Date();
    const lastConnectedOnDate = new Date(lastConnectedOn);
    return (
      lastConnectedOnDate.getDate() === today.getDate() &&
      lastConnectedOnDate.getMonth() === today.getMonth() &&
      lastConnectedOnDate.getFullYear() === today.getFullYear()
    );
  }
}
