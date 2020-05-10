import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameRoomTableSeatComponent } from './game-room-table-seat.component';

describe('GameRoomTableSeatComponent', () => {
  let component: GameRoomTableSeatComponent;
  let fixture: ComponentFixture<GameRoomTableSeatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameRoomTableSeatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameRoomTableSeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
