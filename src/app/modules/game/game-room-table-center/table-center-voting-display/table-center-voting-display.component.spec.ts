import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCenterVotingDisplayComponent } from './table-center-voting-display.component';

describe('TableCenterVotingDisplayComponent', () => {
  let component: TableCenterVotingDisplayComponent;
  let fixture: ComponentFixture<TableCenterVotingDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableCenterVotingDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCenterVotingDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
