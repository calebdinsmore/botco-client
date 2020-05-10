import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameRoomGameControlsComponent } from './game-room-game-controls.component';

describe('GameRoomGameControlsComponent', () => {
  let component: GameRoomGameControlsComponent;
  let fixture: ComponentFixture<GameRoomGameControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameRoomGameControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameRoomGameControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
