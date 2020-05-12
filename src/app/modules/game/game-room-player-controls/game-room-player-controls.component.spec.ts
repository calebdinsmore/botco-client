import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameRoomPlayerControlsComponent } from './game-room-player-controls.component';

describe('GameRoomPlayerControlsComponent', () => {
  let component: GameRoomPlayerControlsComponent;
  let fixture: ComponentFixture<GameRoomPlayerControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameRoomPlayerControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameRoomPlayerControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
