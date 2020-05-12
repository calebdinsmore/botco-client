import { PlayerDto } from './../../../../core/services/room/dto/player.dto';
import { Subscription } from 'rxjs';
import { RoomService } from './../../../../core/services/room/room.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import * as _ from 'lodash';
import { GamePhaseEnum } from 'src/app/core/services/room/dto/enum/game-phase.enum';
import { GameStateDto } from 'src/app/core/services/room/dto/game-state.dto';

interface NightRow {
  characterImage: string;
  reminderText: string;
  toolTip: string;
  priority: number;
  isDead: boolean;
}

@Component({
  selector: 'app-right-side-night-sheet',
  templateUrl: './right-side-night-sheet.component.html',
  styleUrls: ['./right-side-night-sheet.component.less'],
})
export class RightSideNightSheetComponent implements OnInit, OnDestroy {
  players: PlayerDto[] = [];
  header: string;
  nightRows: NightRow[] = [];

  private subs = new Subscription();
  constructor(public roomService: RoomService) {}

  ngOnInit(): void {
    this.subs.add(
      this.roomService.getState().subscribe((state) => {
        this.setupPlayers(state);
        this.setupHeader(state);
      })
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  private setupPlayers(state: GameStateDto) {
    const clonePlayers = _.cloneDeep(state.players);
    this.players = [];
    for (const id in clonePlayers) {
      if (clonePlayers.hasOwnProperty(id)) {
        const player: PlayerDto = clonePlayers[id];
        this.players.push(player);
      }
    }
    if (state.gamePhase === GamePhaseEnum.FirstNight || state.gamePhase === GamePhaseEnum.PreGame) {
      this.players = _.sortBy(this.players, (x) => x.character?.firstNightPriority);
      this.nightRows = this.players.map<NightRow>((player) => {
        if (!player.character?.firstNightPriority) return;

        const reminderText = player.character?.firstNightReminder
          .replace(/:eye:/g, '<i class="fas fa-eye"></i>')
          .replace(/:eye-slash:/g, '<i class="fas fa-eye-slash"></i>')
          .replace(/:plus-circle:/g, '<i class="fas fa-plus-circle"></i>')
          .replace(/:question-circle:/g, '<i class="fas fa-question-circle"></i>')
          .replace(/•/g, '<br/>•');
        return {
          characterImage: player.character?.image,
          reminderText,
          toolTip: player.character?.name,
          priority: player.character?.firstNightPriority,
          isDead: player.isDead,
        };
      });
      if (state.gameMeta.playerCount > 6) {
        this.nightRows.push({
          characterImage: 'M',
          reminderText: 'Tell the Minions who each other are and who the Demon is.',
          toolTip: 'Minion Info',
          priority: 0.5,
          isDead: false,
        });
        this.nightRows.push({
          characterImage: 'D',
          reminderText: 'Tell the Demon who the Minions are. Tell the demon 3 Good characters not in play.',
          toolTip: 'Demon Info',
          priority: 1.5,
          isDead: false,
        });
        this.nightRows = _.sortBy(this.nightRows, (x) => x?.priority);
      }
    } else {
      this.players = _.sortBy(this.players, (x) => x.character?.otherNightPriority);
      this.nightRows = this.players.map<NightRow>((player) => {
        if (!player.character?.otherNightPriority) return;
        const reminderText = player.character?.otherNightReminder
          .replace(/:eye:/g, '<i class="fas fa-eye"></i>')
          .replace(/:eye-slash:/g, '<i class="fas fa-eye-slash"></i>')
          .replace(/:plus-circle:/g, '<i class="fas fa-plus-circle"></i>')
          .replace(/:question-circle:/g, '<i class="fas fa-question-circle"></i>')
          .replace(/•/g, '<br/>•');
        return {
          characterImage: player.character?.image,
          reminderText,
          toolTip: player.character?.name,
          priority: player.character?.otherNightPriority,
          isDead: player.isDead,
        };
      });
    }
  }

  private setupHeader(state: GameStateDto) {
    switch (state.gamePhase) {
      case GamePhaseEnum.PreGame:
      case GamePhaseEnum.FirstNight:
        this.header = 'First Night';
        break;
      default:
        this.header = 'Other Night';
    }
  }
}
