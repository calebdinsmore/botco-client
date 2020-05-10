import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSideNightSheetComponent } from './right-side-night-sheet.component';

describe('RightSideNightSheetComponent', () => {
  let component: RightSideNightSheetComponent;
  let fixture: ComponentFixture<RightSideNightSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightSideNightSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightSideNightSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
