import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameRoomTableComponent } from './game-room-table.component';

describe('GameRoomTableComponent', () => {
  let component: GameRoomTableComponent;
  let fixture: ComponentFixture<GameRoomTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameRoomTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameRoomTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
