import { RoomService } from './../../../../core/services/room/room.service';
import { Component, OnInit } from '@angular/core';
import { CommandsEnum } from 'src/app/core/services/room/dto/commands/commands.enum';

@Component({
  selector: 'app-reminder-token-tray',
  templateUrl: './reminder-token-tray.component.html',
  styleUrls: ['./reminder-token-tray.component.less'],
})
export class ReminderTokenTrayComponent implements OnInit {
  constructor(public roomService: RoomService) {}

  ngOnInit(): void {}

  recallTokens() {
    this.roomService.sendCommand(CommandsEnum.RecallReminderTokens, {});
  }
}
