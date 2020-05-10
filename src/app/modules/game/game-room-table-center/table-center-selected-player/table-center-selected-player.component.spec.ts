import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCenterSelectedPlayerComponent } from './table-center-selected-player.component';

describe('TableCenterSelectedPlayerComponent', () => {
  let component: TableCenterSelectedPlayerComponent;
  let fixture: ComponentFixture<TableCenterSelectedPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableCenterSelectedPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCenterSelectedPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
