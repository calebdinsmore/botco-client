import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameRoomSetPlayerCharacterDialogComponent } from './game-room-set-player-character-dialog.component';

describe('GameRoomSetPlayerCharacterDialogComponent', () => {
  let component: GameRoomSetPlayerCharacterDialogComponent;
  let fixture: ComponentFixture<GameRoomSetPlayerCharacterDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameRoomSetPlayerCharacterDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameRoomSetPlayerCharacterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
