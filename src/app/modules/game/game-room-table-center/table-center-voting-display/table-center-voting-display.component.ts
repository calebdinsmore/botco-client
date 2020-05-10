import { ConfirmVotePayloadDto } from './../../../../core/services/room/dto/commands/in-game/confirm-vote-payload.dto';
import { VotePhaseEnum } from './../../../../core/services/room/dto/enum/vote-phase.enum';
import { GameTableStoreService } from './../../../../core/stores/game-table-store/game-table-store.service';
import { GameStateHelperService } from 'src/app/core/services/game-state-helper/game-state-helper.service';
import { Subscription } from 'rxjs';
import { PlayerDto } from 'src/app/core/services/room/dto/player.dto';
import { RoomService } from './../../../../core/services/room/room.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommandsEnum } from 'src/app/core/services/room/dto/commands/commands.enum';
import { CenterComponentNameEnum } from 'src/app/core/stores/game-table-store/enum/center-component-name.enum';

@Component({
  selector: 'app-table-center-voting-display',
  templateUrl: './table-center-voting-display.component.html',
  styleUrls: ['./table-center-voting-display.component.less'],
})
export class TableCenterVotingDisplayComponent implements OnInit, OnDestroy {
  nominatedPlayer: PlayerDto;
  votePhaseEnum = VotePhaseEnum;
  confirmVotePayload = {} as ConfirmVotePayloadDto;

  private subs = new Subscription();
  constructor(
    public roomService: RoomService,
    public gameStateHelper: GameStateHelperService,
    private gameTableStoreService: GameTableStoreService
  ) {}

  ngOnInit(): void {
    this.subs.add(
      this.roomService.getState().subscribe((state) => {
        if (state) {
          if (state.votingSchema?.votePhase === VotePhaseEnum.NoVote) {
            this.gameTableStoreService.setCenterComponent(CenterComponentNameEnum.GameMeta);
          }
          this.nominatedPlayer = state.players[state.votingSchema.nominatedPlayerId];
          this.confirmVotePayload.voteCount = state.votingSchema?.voteCount;
        }
      })
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  toggleHand() {
    this.roomService.sendCommand(CommandsEnum.ToggleHand, {});
  }

  beginVote() {
    this.roomService.sendCommand(CommandsEnum.BeginVote, {});
  }

  confirm() {
    this.roomService.sendCommand(CommandsEnum.ConfirmVote, this.confirmVotePayload);
  }
}
