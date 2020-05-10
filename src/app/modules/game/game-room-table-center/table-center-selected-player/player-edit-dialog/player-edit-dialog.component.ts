import { RoomService } from './../../../../../core/services/room/room.service';
import { UpdatePlayerPayloadDto } from './../../../../../core/services/room/dto/commands/in-game/update-player-payload.dto';
import { PlayerDto } from 'src/app/core/services/room/dto/player.dto';
import { Component, OnInit, Input } from '@angular/core';
import { CommandsEnum } from 'src/app/core/services/room/dto/commands/commands.enum';

@Component({
  selector: 'app-player-edit-dialog',
  templateUrl: './player-edit-dialog.component.html',
  styleUrls: ['./player-edit-dialog.component.less'],
})
export class PlayerEditDialogComponent implements OnInit {
  updatePlayerPayload: UpdatePlayerPayloadDto;
  show: boolean;

  constructor(private roomService: RoomService) {}

  ngOnInit(): void {}

  edit(player: PlayerDto) {
    this.updatePlayerPayload = {
      playerId: player.playerId,
      player,
    } as UpdatePlayerPayloadDto;
    this.show = true;
  }

  cancel() {
    this.show = false;
  }

  save() {
    this.roomService.sendCommand(CommandsEnum.UpdatePlayer, this.updatePlayerPayload);
  }
}
