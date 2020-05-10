import { GamePhaseEnum } from './../../../core/services/room/dto/enum/game-phase.enum';
import { RoomService } from './../../../core/services/room/room.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-room-side-control',
  templateUrl: './game-room-side-control.component.html',
  styleUrls: ['./game-room-side-control.component.less'],
})
export class GameRoomSideControlComponent implements OnInit {
  gamePhaseEnum = GamePhaseEnum;

  constructor(public roomService: RoomService) {}

  ngOnInit(): void {}
}
