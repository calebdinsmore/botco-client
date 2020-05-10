import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderTokenComponent } from './reminder-token.component';

describe('ReminderTokenComponent', () => {
  let component: ReminderTokenComponent;
  let fixture: ComponentFixture<ReminderTokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReminderTokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReminderTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
