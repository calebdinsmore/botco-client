import { GameStateHelperService } from 'src/app/core/services/game-state-helper/game-state-helper.service';
import { PlayerDto } from 'src/app/core/services/room/dto/player.dto';
import { RoomService } from './../../../core/services/room/room.service';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { GamePhaseEnum } from 'src/app/core/services/room/dto/enum/game-phase.enum';
import { GameTableStoreService } from 'src/app/core/stores/game-table-store/game-table-store.service';
import { CenterComponentNameEnum } from 'src/app/core/stores/game-table-store/enum/center-component-name.enum';

@Component({
  selector: 'app-game-room-table-center-game-meta',
  templateUrl: './game-room-table-center-game-meta.component.html',
  styleUrls: ['./game-room-table-center-game-meta.component.less'],
})
export class GameRoomTableCenterGameMetaComponent implements OnInit, OnDestroy {
  @Input() playerMap: Map<number, PlayerDto>;
  gamePhaseEnum = GamePhaseEnum;
  joinButtonLabel = 'Copy Join Link';
  joinLink: string;

  private subs = new Subscription();
  constructor(
    public roomService: RoomService,
    public gameStateHelper: GameStateHelperService,
    private gameTableStore: GameTableStoreService
  ) {}

  ngOnInit(): void {
    this.subs.add(
      this.roomService.getRoom().subscribe((room) => {
        this.joinLink = `${location.origin}/join/${room.id}`;
      })
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  copySuccess() {
    this.joinButtonLabel = 'Copied!';
    setTimeout(() => (this.joinButtonLabel = 'Copy Join Link'), 5000);
  }

  copyError() {
    this.joinButtonLabel = 'Failed to Copy';
    setTimeout(() => (this.joinButtonLabel = 'Copy Join Link'), 5000);
  }

  returnToVote() {
    this.gameTableStore.setCenterComponent(CenterComponentNameEnum.VotingDisplay);
  }
}
