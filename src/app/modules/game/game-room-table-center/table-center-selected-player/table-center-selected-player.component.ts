import { RevealGrimoirePayloadDto } from './../../../../core/services/room/dto/commands/in-game/reveal-grimoire-payload.dto';
import { UpdatePlayerPayloadDto } from './../../../../core/services/room/dto/commands/in-game/update-player-payload.dto';
import { SetPlayerDeadStatusPayloadDto } from './../../../../core/services/room/dto/commands/in-game/set-player-dead-status-payload.dto';
import { GameStateHelperService } from 'src/app/core/services/game-state-helper/game-state-helper.service';
import { GameStateDto } from './../../../../core/services/room/dto/game-state.dto';
import { Subscription } from 'rxjs';
import { RoomService } from './../../../../core/services/room/room.service';
import { PlayerDto } from './../../../../core/services/room/dto/player.dto';
import { Component, OnInit, Input, OnDestroy, OnChanges } from '@angular/core';
import { CommandsEnum } from 'src/app/core/services/room/dto/commands/commands.enum';
import { GameTableStoreService } from 'src/app/core/stores/game-table-store/game-table-store.service';
import { CenterComponentNameEnum } from 'src/app/core/stores/game-table-store/enum/center-component-name.enum';
import { RemovePlayerPayloadDto } from 'src/app/core/services/room/dto/commands/in-game/remove-player-payload.dto';

@Component({
  selector: 'app-table-center-selected-player',
  templateUrl: './table-center-selected-player.component.html',
  styleUrls: ['./table-center-selected-player.component.less'],
})
export class TableCenterSelectedPlayerComponent implements OnInit, OnChanges, OnDestroy {
  @Input() playerId: string;
  state: GameStateDto;
  player: PlayerDto;
  canSeeGrimoire: boolean;

  constructor(
    public roomService: RoomService,
    public gameStateHelper: GameStateHelperService,
    private gameTableStore: GameTableStoreService
  ) {}

  private subs = new Subscription();
  ngOnInit(): void {
    this.subs.add(
      this.roomService.getState().subscribe((state) => {
        if (this.playerId) {
          this.state = state;
          this.player = state.players[this.playerId];
          this.canSeeGrimoire = this.state.canSeeGrimoirePlayerId === this.playerId;
        }
      })
    );
  }

  ngOnChanges() {
    if (this.playerId) {
      if (this.state) {
        this.player = this.state.players[this.playerId];
        this.canSeeGrimoire = this.state.canSeeGrimoirePlayerId === this.playerId;
      }
    }
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  openPlayerChat(player: PlayerDto) {
    this.gameTableStore.setCenterComponent(CenterComponentNameEnum.Chat, player.playerId);
  }

  toggleDead() {
    this.roomService.sendCommand(CommandsEnum.SetPlayerDeadStatus, {
      playerId: this.playerId,
      isDead: !this.player.isDead,
    } as SetPlayerDeadStatusPayloadDto);
  }

  toggleGrimoire() {
    const playerId = this.canSeeGrimoire ? null : this.playerId;
    this.roomService.sendCommand(CommandsEnum.RevealGrimoire, {
      playerId,
    } as RevealGrimoirePayloadDto);
  }

  removePlayer() {
    this.roomService.sendCommand(CommandsEnum.RemovePlayer, {
      playerId: this.playerId,
    } as RemovePlayerPayloadDto);
  }
}
