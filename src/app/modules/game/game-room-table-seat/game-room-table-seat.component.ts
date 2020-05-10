import { RemoveReminderTokenPayloadDto } from './../../../core/services/room/dto/commands/in-game/remove-reminder-token-payload.dto';
import { ReminderTokenDto } from './../../../core/services/room/dto/reminder-token.dto';
import { GamePhaseEnum } from './../../../core/services/room/dto/enum/game-phase.enum';
import { GameTableStoreService } from './../../../core/stores/game-table-store/game-table-store.service';
import { SetPlayerSeatDto } from './../../../core/services/room/dto/commands/pre-game/set-player-seat.dto';
import { RoomService } from './../../../core/services/room/room.service';
import { PlayerDto } from './../../../core/services/room/dto/player.dto';
import { Component, OnInit, Input } from '@angular/core';
import { CommandsEnum } from 'src/app/core/services/room/dto/commands/commands.enum';
import { GameStateHelperService } from 'src/app/core/services/game-state-helper/game-state-helper.service';
import { AddReminderTokenDto } from 'src/app/core/services/room/dto/commands/in-game/add-reminder-token.dto';
import { CenterComponentNameEnum } from 'src/app/core/stores/game-table-store/enum/center-component-name.enum';

@Component({
  selector: 'app-game-room-table-seat',
  templateUrl: './game-room-table-seat.component.html',
  styleUrls: ['./game-room-table-seat.component.less'],
})
export class GameRoomTableSeatComponent implements OnInit {
  @Input() player: PlayerDto;
  @Input() seatNumber: number;
  gamePhaseEnum = GamePhaseEnum;

  constructor(public roomService: RoomService, private gameTableStore: GameTableStoreService) {}

  ngOnInit(): void {}

  dragStart(event: DragEvent) {
    this.gameTableStore.setDraggedPlayer(this.player.playerId);
  }

  tokenDropped() {
    if (this.gameTableStore.draggedPlayerId) {
      this.roomService.sendCommand(CommandsEnum.SetPlayerSeat, {
        playerId: this.gameTableStore.draggedPlayerId,
        seatNumber: this.seatNumber,
      } as SetPlayerSeatDto);
    } else if (this.gameTableStore.draggedReminderTokenId) {
      this.roomService.sendCommand(CommandsEnum.AddReminderToken, {
        reminderTokenId: this.gameTableStore.draggedReminderTokenId,
        playerId: this.player.playerId,
      } as AddReminderTokenDto);
    }
  }

  dragEnd() {
    this.gameTableStore.setDraggedPlayer(null);
  }

  removeReminderToken(event: any, reminderToken: ReminderTokenDto) {
    event.stopPropagation();
    this.roomService.sendCommand(CommandsEnum.RemoveReminderToken, {
      playerId: this.player.playerId,
      reminderTokenId: reminderToken.id,
    } as RemoveReminderTokenPayloadDto);
  }

  selectPlayer() {
    this.gameTableStore.setCenterComponent(CenterComponentNameEnum.SelectedPlayer, this.player.playerId);
  }
}
