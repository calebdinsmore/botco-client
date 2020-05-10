import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameRoomPlayerTokenComponent } from './game-room-player-token.component';

describe('GameRoomPlayerTokenComponent', () => {
  let component: GameRoomPlayerTokenComponent;
  let fixture: ComponentFixture<GameRoomPlayerTokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameRoomPlayerTokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameRoomPlayerTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
