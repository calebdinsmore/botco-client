import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameRoomReminderSummaryComponent } from './game-room-reminder-summary.component';

describe('GameRoomReminderSummaryComponent', () => {
  let component: GameRoomReminderSummaryComponent;
  let fixture: ComponentFixture<GameRoomReminderSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameRoomReminderSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameRoomReminderSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
