import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameRoomMenuComponent } from './game-room-menu.component';

describe('GameRoomMenuComponent', () => {
  let component: GameRoomMenuComponent;
  let fixture: ComponentFixture<GameRoomMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameRoomMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameRoomMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
