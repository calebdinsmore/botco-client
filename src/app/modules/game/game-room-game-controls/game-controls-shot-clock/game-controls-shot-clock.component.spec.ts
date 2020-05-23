import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameControlsShotClockComponent } from './game-controls-shot-clock.component';

describe('GameControlsShotClockComponent', () => {
  let component: GameControlsShotClockComponent;
  let fixture: ComponentFixture<GameControlsShotClockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameControlsShotClockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameControlsShotClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
