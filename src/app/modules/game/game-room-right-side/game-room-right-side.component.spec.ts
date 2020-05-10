import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameRoomRightSideComponent } from './game-room-right-side.component';

describe('GameRoomRightSideComponent', () => {
  let component: GameRoomRightSideComponent;
  let fixture: ComponentFixture<GameRoomRightSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameRoomRightSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameRoomRightSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
