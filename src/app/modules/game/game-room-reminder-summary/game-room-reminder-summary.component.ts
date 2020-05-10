import { GameStateDto } from './../../../core/services/room/dto/game-state.dto';
import { CharacterTypeEnum } from './../../../core/services/room/dto/enum/character-type.enum';
import { PlayerDto } from './../../../core/services/room/dto/player.dto';
import { Subscription } from 'rxjs';
import { RoomService } from './../../../core/services/room/room.service';
import { Component, OnInit, OnDestroy, Input, OnChanges } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-game-room-reminder-summary',
  templateUrl: './game-room-reminder-summary.component.html',
  styleUrls: ['./game-room-reminder-summary.component.less'],
})
export class GameRoomReminderSummaryComponent implements OnInit, OnChanges, OnDestroy {
  @Input() playerId: string;
  players: PlayerDto[] = [];
  characterTypeEnum = CharacterTypeEnum;

  private subs = new Subscription();
  private state: GameStateDto;
  constructor(private roomService: RoomService) {}

  ngOnInit(): void {
    this.subs.add(
      this.roomService.getState().subscribe((state) => {
        this.state = state;
        this.players = [];
        const clonePlayers = _.cloneDeep(state.players);
        for (const id in clonePlayers) {
          if (clonePlayers.hasOwnProperty(id)) {
            if (this.playerId) {
              if (this.playerId === id) {
                this.players.push(clonePlayers[id]);
              }
            } else {
              this.players.push(clonePlayers[id]);
            }
          }
        }
      })
    );
  }

  ngOnChanges() {
    if (this.playerId && this.state) {
      this.players = [this.state.players[this.playerId]];
    }
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
