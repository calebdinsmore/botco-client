import { PlayerDto } from 'src/app/core/services/room/dto/player.dto';
import { CommandsEnum } from './../../../core/services/room/dto/commands/commands.enum';
import { RoomService } from './../../../core/services/room/room.service';
import { Subscription } from 'rxjs';
import { GamePhaseEnum } from './../../../core/services/room/dto/enum/game-phase.enum';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { GameStateDto } from 'src/app/core/services/room/dto/game-state.dto';
import * as _ from 'lodash';
import { SelectItem } from 'primeng/api/selectitem';
import { NominatePlayerPayloadDto } from 'src/app/core/services/room/dto/commands/in-game/nominate-player-payload.dto';

interface PlayerSelectItem extends SelectItem {
  characterImage: string;
  showWarning: boolean;
}

@Component({
  selector: 'app-game-room-game-controls',
  templateUrl: './game-room-game-controls.component.html',
  styleUrls: ['./game-room-game-controls.component.less'],
})
export class GameRoomGameControlsComponent implements OnInit, OnDestroy {
  state: GameStateDto;
  nextPhaseLabel: string;
  canProceedToNextPhase: boolean;
  nominatedPlayerItems: PlayerSelectItem[] = [];
  nominatorPlayerItems: PlayerSelectItem[] = [];
  nominatedPlayerId: string;
  nominatingPlayerId: string;
  gamePhaseEnum = GamePhaseEnum;

  private subs = new Subscription();
  constructor(public roomService: RoomService) {}

  ngOnInit(): void {
    this.subs.add(
      this.roomService.getState().subscribe((state) => {
        this.state = state;
        this.nextPhaseLabel = this.getNextPhaseLabel();
        this.canProceedToNextPhase = this.getCanProceedToNextState();
        this.setupPlayers();
      })
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  proceedToNextPhase() {
    this.roomService.sendCommand(CommandsEnum.BeginNextPhase, {});
  }

  nominatePlayer() {
    this.roomService.sendCommand(CommandsEnum.NominatePlayer, {
      nominatedPlayerId: this.nominatedPlayerId,
      nominatingPlayerId: this.nominatingPlayerId,
    } as NominatePlayerPayloadDto);
    this.nominatedPlayerId = null;
    this.nominatingPlayerId = null;
  }

  toggleRoomLock() {
    this.roomService.sendCommand(CommandsEnum.ToggleRoomLock, {});
  }

  private getNextPhaseLabel() {
    if (this.state) {
      switch (this.state.nextGamePhase) {
        case GamePhaseEnum.FirstNight:
          return 'First Night';
        case GamePhaseEnum.Day:
          return 'Day Phase';
        case GamePhaseEnum.Night:
          return 'Night Phase';
      }
    }
  }

  private getCanProceedToNextState() {
    if (this.state) {
      switch (this.state.nextGamePhase) {
        case GamePhaseEnum.FirstNight:
          return this.state.charactersDistributed;
        default:
          return true;
      }
    }
  }

  private setupPlayers() {
    if (this.state) {
      this.nominatedPlayerItems = [];
      this.nominatorPlayerItems = [];
      for (const id in this.state.players) {
        if (this.state.players.hasOwnProperty(id)) {
          const player: PlayerDto = this.state.players[id];
          this.nominatedPlayerItems.push({
            label: player.username,
            value: player.playerId,
            icon: player.fallbackIcon,
            characterImage: player.character?.image,
            showWarning: player.hasBeenNominated,
          });
          if (!player.isDead) {
            this.nominatorPlayerItems.push({
              label: player.username,
              value: player.playerId,
              icon: player.fallbackIcon,
              characterImage: player.character?.image,
              showWarning: player.hasNominated,
            });
          }
        }
      }
    }
  }
}
