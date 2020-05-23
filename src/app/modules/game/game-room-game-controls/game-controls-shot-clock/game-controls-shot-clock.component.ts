import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/core/services/room/room.service';
import { CommandsEnum } from 'src/app/core/services/room/dto/commands/commands.enum';
import { ControlShotClockPayloadDto } from 'src/app/core/services/room/dto/commands/in-game/control-shot-clock-payload.dto';
import { ShotClockActionEnum } from 'src/app/core/services/room/dto/enum/shot-clock-actions.enum';

@Component({
  selector: 'app-game-controls-shot-clock',
  templateUrl: './game-controls-shot-clock.component.html',
  styleUrls: ['./game-controls-shot-clock.component.less'],
})
export class GameControlsShotClockComponent implements OnInit {
  minutes = 0;
  seconds = 0;

  constructor(public roomService: RoomService) {}

  ngOnInit(): void {}

  startShotClock() {
    const seconds = this.minutes * 60 + this.seconds;
    this.roomService.sendCommand(CommandsEnum.ControlShotClock, {
      action: ShotClockActionEnum.Start,
      seconds,
    } as ControlShotClockPayloadDto);
  }

  resumeShotClock() {
    this.roomService.sendCommand(CommandsEnum.ControlShotClock, {
      action: ShotClockActionEnum.Resume,
    } as ControlShotClockPayloadDto);
  }

  pauseShotClock() {
    this.roomService.sendCommand(CommandsEnum.ControlShotClock, {
      action: ShotClockActionEnum.Pause,
    } as ControlShotClockPayloadDto);
  }

  stopShotClock() {
    this.roomService.sendCommand(CommandsEnum.ControlShotClock, {
      action: ShotClockActionEnum.Stop,
    } as ControlShotClockPayloadDto);
  }
}
