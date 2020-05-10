import { MarkChatReadPayloadDto } from './../../../../core/services/room/dto/commands/in-game/mark-chat-read-payload.dto';
import { GameTableStoreService } from './../../../../core/stores/game-table-store/game-table-store.service';
import { ChatRoomDto } from './../../../../core/services/room/dto/chat-room.dto';
import { GameStateHelperService } from './../../../../core/services/game-state-helper/game-state-helper.service';
import { PlayerDto } from './../../../../core/services/room/dto/player.dto';
import { Subscription } from 'rxjs';
import { RoomService } from './../../../../core/services/room/room.service';
import { Component, OnInit } from '@angular/core';
import { GameStateDto } from 'src/app/core/services/room/dto/game-state.dto';
import { Room } from 'colyseus.js';
import { CenterComponentNameEnum } from 'src/app/core/stores/game-table-store/enum/center-component-name.enum';
import { CommandsEnum } from 'src/app/core/services/room/dto/commands/commands.enum';

@Component({
  selector: 'app-table-center-chat',
  templateUrl: './table-center-chat.component.html',
  styleUrls: ['./table-center-chat.component.less'],
})
export class TableCenterChatComponent implements OnInit {
  state: GameStateDto;
  room: Room<GameStateDto>;
  chatRooms: ChatRoomDto[];
  selectedChatRoom: ChatRoomDto;

  private subs = new Subscription();
  constructor(
    public roomService: RoomService,
    public gameStateHelper: GameStateHelperService,
    private gameTableStore: GameTableStoreService
  ) {}

  ngOnInit(): void {
    this.subs.add(
      this.roomService.getRoom().subscribe((room) => {
        this.room = room;
      })
    );
    this.subs.add(
      this.roomService.getState().subscribe((state) => {
        if (this.room) {
          this.state = state;
          const currentPlayer = this.gameStateHelper.currentPlayer(this.room);
          this.chatRooms = this.gameStateHelper.mapSchemaAsArray(currentPlayer.chatRooms);
        }
      })
    );
  }

  selectChatRoom(chatRoom: ChatRoomDto) {
    this.selectedChatRoom = chatRoom;
    this.roomService.sendCommand(CommandsEnum.MarkChatRead, {
      toPlayerId: chatRoom.otherPlayerId,
    } as MarkChatReadPayloadDto);
  }

  deselectChatRoom() {
    if (this.selectedChatRoom?.hasUnread) {
      this.roomService.sendCommand(CommandsEnum.MarkChatRead, {
        toPlayerId: this.selectedChatRoom.otherPlayerId,
      } as MarkChatReadPayloadDto);
    }
    this.selectedChatRoom = null;
  }

  closeChat() {
    this.gameTableStore.setCenterComponent(CenterComponentNameEnum.GameMeta);
  }
}
