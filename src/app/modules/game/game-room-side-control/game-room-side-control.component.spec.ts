import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameRoomSideControlComponent } from './game-room-side-control.component';

describe('GameRoomSideControlComponent', () => {
  let component: GameRoomSideControlComponent;
  let fixture: ComponentFixture<GameRoomSideControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameRoomSideControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameRoomSideControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
