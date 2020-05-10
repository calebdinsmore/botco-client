import { GameStateHelperService } from 'src/app/core/services/game-state-helper/game-state-helper.service';
import { Subscription } from 'rxjs';
import { RoomService } from './../../../core/services/room/room.service';
import { CenterComponentNameEnum } from './../../../core/stores/game-table-store/enum/center-component-name.enum';
import { GameTableStoreService } from './../../../core/stores/game-table-store/game-table-store.service';
import { PlayerDto } from 'src/app/core/services/room/dto/player.dto';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-game-room-table-center',
  templateUrl: './game-room-table-center.component.html',
  styleUrls: ['./game-room-table-center.component.less'],
})
export class GameRoomTableCenterComponent implements OnInit, OnDestroy {
  @Input() playerMap: Map<number, PlayerDto>;
  centerComponentNameEnum = CenterComponentNameEnum;

  private subs = new Subscription();
  constructor(
    public gameTableStore: GameTableStoreService,
    public gameStateHelper: GameStateHelperService,
    public roomService: RoomService
  ) {}

  ngOnInit(): void {
    this.subs.add(
      this.roomService.getState().subscribe((state) => {
        if (
          state?.votingSchema?.nominatedPlayerId &&
          this.gameTableStore.centerComponent !== CenterComponentNameEnum.VotingDisplay
        ) {
          // Force players to focus the voting component when a nomination is being run
          this.gameTableStore.setCenterComponent(CenterComponentNameEnum.VotingDisplay);
        }
      })
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  closeCenter() {
    this.gameTableStore.setCenterComponent(CenterComponentNameEnum.GameMeta);
  }

  openChat() {
    this.gameTableStore.setCenterComponent(CenterComponentNameEnum.Chat);
  }
}
