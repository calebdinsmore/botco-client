import { MarkChatReadPayloadDto } from './../../../../../core/services/room/dto/commands/in-game/mark-chat-read-payload.dto';
import { SendChatMessagePayloadDto } from './../../../../../core/services/room/dto/commands/in-game/send-chat-message-payload.dto';
import { ChatRoomDto } from './../../../../../core/services/room/dto/chat-room.dto';
import { Subscription } from 'rxjs';
import { GameStateHelperService } from 'src/app/core/services/game-state-helper/game-state-helper.service';
import { RoomService } from './../../../../../core/services/room/room.service';
import { PlayerDto } from 'src/app/core/services/room/dto/player.dto';
import { ArraySchema } from '@colyseus/schema';
import { Component, OnInit, OnDestroy, Input, OnChanges, ViewChild } from '@angular/core';
import { GameStateDto } from 'src/app/core/services/room/dto/game-state.dto';
import { Room } from 'colyseus.js';
import { CommandsEnum } from 'src/app/core/services/room/dto/commands/commands.enum';
import { ScrollPanel } from 'primeng/scrollpanel/public_api';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.less'],
})
export class ChatWindowComponent implements OnInit, OnChanges, OnDestroy {
  @Input() chatRoom: ChatRoomDto;
  @ViewChild('scrollPanel') scrollPanel: ScrollPanel;
  currentPlayer: PlayerDto;
  otherPlayer: PlayerDto;
  playerMap = new Map<string, PlayerDto>();
  room: Room<GameStateDto>;
  state: GameStateDto;
  messageText: string;

  constructor(private roomService: RoomService, private gameStateHelper: GameStateHelperService) {}

  private subs = new Subscription();
  ngOnInit(): void {
    this.subs.add(
      this.roomService.getRoom().subscribe((room) => {
        this.room = room;
        this.currentPlayer = this.gameStateHelper.currentPlayer(room);
        this.playerMap.set(this.currentPlayer.playerId, this.currentPlayer);
      })
    );
    this.subs.add(
      this.roomService.getState().subscribe((state) => {
        if (this.room) {
          this.otherPlayer = this.gameStateHelper.getPlayer(state, this.chatRoom?.otherPlayerId);
          this.playerMap.set(this.otherPlayer.playerId, this.otherPlayer);
        }
      })
    );
  }

  ngOnChanges() {
    if (this.chatRoom) {
      setTimeout(() => {
        this.scrollPanel?.scrollTop(this.chatRoom.messages.length * 500);
      });
      this.chatRoom.messages.onAdd = (item, index) => {
        setTimeout(() => {
          this.scrollPanel?.scrollTop(index * 500);
        });
      };
    }
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  inputChanged() {
    this.roomService.sendCommand(CommandsEnum.MarkChatRead, {
      toPlayerId: this.chatRoom.otherPlayerId,
    } as MarkChatReadPayloadDto);
  }

  sendMessage(formValue: { message: string }) {
    this.roomService.sendCommand(CommandsEnum.SendChatMessage, {
      toPlayerId: this.otherPlayer.playerId,
      content: formValue.message,
    } as SendChatMessagePayloadDto);
    this.messageText = '';
  }
}
