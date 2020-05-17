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
export class GameRoomTableCenterGameMetaComponent implements OnInit {
  @Input() playerMap: Map<number, PlayerDto>;
  gamePhaseEnum = GamePhaseEnum;

  constructor(
    public roomService: RoomService,
    public gameStateHelper: GameStateHelperService,
    private gameTableStore: GameTableStoreService
  ) {}

  ngOnInit(): void {}

  returnToVote() {
    this.gameTableStore.setCenterComponent(CenterComponentNameEnum.VotingDisplay);
  }
}
