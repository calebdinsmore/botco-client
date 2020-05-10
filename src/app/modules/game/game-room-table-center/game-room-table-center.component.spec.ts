import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameRoomTableCenterComponent } from './game-room-table-center.component';

describe('GameRoomTableCenterComponent', () => {
  let component: GameRoomTableCenterComponent;
  let fixture: ComponentFixture<GameRoomTableCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameRoomTableCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameRoomTableCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
