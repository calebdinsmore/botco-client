import { PlayerDto } from './../../../core/services/room/dto/player.dto';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-game-room-table',
  templateUrl: './game-room-table.component.html',
  styleUrls: ['./game-room-table.component.less'],
})
export class GameRoomTableComponent implements OnInit, OnChanges {
  @Input() players: PlayerDto[];
  playerSeatMap: Map<number, PlayerDto> = new Map();
  topRow: PlayerDto[] = [];
  rightColumn: PlayerDto[] = [];
  bottomRow: PlayerDto[] = [];
  leftColumn: PlayerDto[] = [];

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges.players) {
      this.arrangePlayers();
    }
  }

  private arrangePlayers() {
    if (!this.players) {
      return;
    }
    this.playerSeatMap = new Map();
    for (const player of this.players) {
      this.playerSeatMap.set(player.seatNumber, player);
    }
  }
}
