import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameRoomTableCenterGameMetaComponent } from './game-room-table-center-game-meta.component';

describe('GameRoomTableCenterGameMetaComponent', () => {
  let component: GameRoomTableCenterGameMetaComponent;
  let fixture: ComponentFixture<GameRoomTableCenterGameMetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameRoomTableCenterGameMetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameRoomTableCenterGameMetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
