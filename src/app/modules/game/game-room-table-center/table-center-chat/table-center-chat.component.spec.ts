import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCenterChatComponent } from './table-center-chat.component';

describe('TableCenterChatComponent', () => {
  let component: TableCenterChatComponent;
  let fixture: ComponentFixture<TableCenterChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableCenterChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCenterChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
