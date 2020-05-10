import { GameTableStoreService } from './../../../../core/stores/game-table-store/game-table-store.service';
import { ReminderTokenDto } from './../../../../core/services/room/dto/reminder-token.dto';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reminder-token',
  templateUrl: './reminder-token.component.html',
  styleUrls: ['./reminder-token.component.less'],
})
export class ReminderTokenComponent implements OnInit {
  @Input() reminderToken: ReminderTokenDto;

  constructor(private gameTableStore: GameTableStoreService) {}

  ngOnInit(): void {}

  dragStart() {
    this.gameTableStore.setDraggedReminderToken(this.reminderToken.id);
  }

  dragEnd() {
    this.gameTableStore.setDraggedReminderToken(null);
  }
}
