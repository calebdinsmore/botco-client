import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderTokenTrayComponent } from './reminder-token-tray.component';

describe('ReminderTokenTrayComponent', () => {
  let component: ReminderTokenTrayComponent;
  let fixture: ComponentFixture<ReminderTokenTrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReminderTokenTrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReminderTokenTrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
