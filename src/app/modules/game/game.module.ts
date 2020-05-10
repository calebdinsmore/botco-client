import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { GameRoomComponent } from './game-room/game-room.component';
import { GameRoomTableComponent } from './game-room-table/game-room-table.component';
import { GameRoomTableSeatComponent } from './game-room-table-seat/game-room-table-seat.component';
import { GameRoomTableCenterComponent } from './game-room-table-center/game-room-table-center.component';
import { GameRoomTableCenterGameMetaComponent } from './game-room-table-center-game-meta/game-room-table-center-game-meta.component';
import { GameRoomSideControlComponent } from './game-room-side-control/game-room-side-control.component';
import { SideControlCharacterSelectComponent } from './game-room-side-control/side-control-character-select/side-control-character-select.component';
import { CharacterTokenComponent } from './game-room-side-control/character-token/character-token.component';
import { ReminderTokenTrayComponent } from './game-room-side-control/reminder-token-tray/reminder-token-tray.component';
import { ReminderTokenComponent } from './game-room-side-control/reminder-token/reminder-token.component';
import { GameRoomGameControlsComponent } from './game-room-game-controls/game-room-game-controls.component';
import { GameRoomRightSideComponent } from './game-room-right-side/game-room-right-side.component';
import { RightSideNightSheetComponent } from './game-room-right-side/right-side-night-sheet/right-side-night-sheet.component';
import { GameRoomReminderSummaryComponent } from './game-room-reminder-summary/game-room-reminder-summary.component';
import { TableCenterSelectedPlayerComponent } from './game-room-table-center/table-center-selected-player/table-center-selected-player.component';
import { GameRoomPlayerTokenComponent } from './game-room-player-token/game-room-player-token.component';
import { TableCenterVotingDisplayComponent } from './game-room-table-center/table-center-voting-display/table-center-voting-display.component';
import { TableCenterChatComponent } from './game-room-table-center/table-center-chat/table-center-chat.component';
import { ChatWindowComponent } from './game-room-table-center/table-center-chat/chat-window/chat-window.component';
import { PlayerEditDialogComponent } from './game-room-table-center/table-center-selected-player/player-edit-dialog/player-edit-dialog.component';
import { GameRoomSetPlayerCharacterDialogComponent } from './game-room-set-player-character-dialog/game-room-set-player-character-dialog.component';

@NgModule({
  declarations: [
    GameRoomComponent,
    GameRoomTableComponent,
    GameRoomTableSeatComponent,
    GameRoomTableCenterComponent,
    GameRoomTableCenterGameMetaComponent,
    GameRoomSideControlComponent,
    SideControlCharacterSelectComponent,
    CharacterTokenComponent,
    ReminderTokenTrayComponent,
    ReminderTokenComponent,
    GameRoomGameControlsComponent,
    GameRoomRightSideComponent,
    RightSideNightSheetComponent,
    GameRoomReminderSummaryComponent,
    TableCenterSelectedPlayerComponent,
    GameRoomPlayerTokenComponent,
    TableCenterVotingDisplayComponent,
    TableCenterChatComponent,
    ChatWindowComponent,
    PlayerEditDialogComponent,
    GameRoomSetPlayerCharacterDialogComponent,
  ],
  imports: [SharedModule],
  exports: [GameRoomComponent],
})
export class GameModule {}
