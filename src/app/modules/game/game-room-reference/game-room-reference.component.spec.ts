import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameRoomReferenceComponent } from './game-room-reference.component';

describe('GameRoomReferenceComponent', () => {
  let component: GameRoomReferenceComponent;
  let fixture: ComponentFixture<GameRoomReferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameRoomReferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameRoomReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
