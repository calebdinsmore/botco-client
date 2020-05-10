import { GameStateHelperService } from 'src/app/core/services/game-state-helper/game-state-helper.service';
import { RoomService } from './../../../core/services/room/room.service';
import { PlayerDto } from './../../../core/services/room/dto/player.dto';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-room-player-token',
  templateUrl: './game-room-player-token.component.html',
  styleUrls: ['./game-room-player-token.component.less'],
})
export class GameRoomPlayerTokenComponent implements OnInit {
  @Input() player: PlayerDto;

  constructor(public roomService: RoomService, public gameStateHelper: GameStateHelperService) {}

  ngOnInit(): void {}
}
