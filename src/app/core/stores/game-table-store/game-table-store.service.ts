import { CenterComponentNameEnum } from './enum/center-component-name.enum';
import { GameTableStoreActionsEnum } from './enum/game-table-store-actions.enum';
import { Injectable } from '@angular/core';
import { ObservableStore } from '@codewithdan/observable-store';
import { RoomService } from '../../services/room/room.service';

export interface GameTableStoreState {
  draggedPlayerId: string;
  draggedReminderTokenId: string;
  centerComponent: CenterComponentNameEnum;
  centerComponentPayload: string;
}

@Injectable({
  providedIn: 'root',
})
export class GameTableStoreService extends ObservableStore<GameTableStoreState> {
  constructor(private roomService: RoomService) {
    super({});
    const initialState: GameTableStoreState = {
      draggedPlayerId: null,
      draggedReminderTokenId: null,
      centerComponent: CenterComponentNameEnum.GameMeta,
      centerComponentPayload: null,
    };
    this.setState(initialState, 'INIT_STATE');
  }

  get draggedPlayerId() {
    return this.getState().draggedPlayerId;
  }

  get centerComponent() {
    return this.getState().centerComponent;
  }

  get draggedReminderTokenId() {
    return this.getState().draggedReminderTokenId;
  }

  get centerComponentPayload() {
    return this.getState().centerComponentPayload;
  }

  setDraggedPlayer(playerId: string) {
    this.setState({ draggedPlayerId: playerId }, GameTableStoreActionsEnum.SetDraggedPlayer);
  }

  setCenterComponent<T>(componentName: CenterComponentNameEnum, centerComponentPayload?: string) {
    this.setState(
      { centerComponent: componentName, centerComponentPayload },
      GameTableStoreActionsEnum.SetCenterComponent
    );
  }

  setDraggedReminderToken(reminderTokenId: string) {
    return this.setState(
      { draggedReminderTokenId: reminderTokenId },
      GameTableStoreActionsEnum.SetDraggedReminderToken
    );
  }
}
