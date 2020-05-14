import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/core/services/room/room.service';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { GameStateHelperService } from 'src/app/core/services/game-state-helper/game-state-helper.service';
import { CommandsEnum } from 'src/app/core/services/room/dto/commands/commands.enum';

@Component({
  selector: 'app-game-room-menu',
  templateUrl: './game-room-menu.component.html',
  styleUrls: ['./game-room-menu.component.less'],
})
export class GameRoomMenuComponent implements OnInit {
  show: boolean;

  constructor(
    public roomService: RoomService,
    public gameStateHelper: GameStateHelperService,
    private router: Router,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {}

  open() {
    this.show = true;
  }

  leaveRoom() {
    this.confirmationService.confirm({
      key: 'leaveOrRestart',
      message: 'This will terminate your session with this room.',
      accept: () => {
        this.roomService.leaveRoom();
        setTimeout(() => {
          this.router.navigate(['']);
        });
      },
    });
  }

  restartGame() {
    this.confirmationService.confirm({
      key: 'leaveOrRestart',
      message: 'This will terminate your session with this room.',
      accept: () => {
        this.roomService.sendCommand(CommandsEnum.RestartGame, {});
      },
    });
  }
}
