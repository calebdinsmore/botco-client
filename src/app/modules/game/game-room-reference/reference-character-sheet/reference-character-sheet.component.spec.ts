import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceCharacterSheetComponent } from './reference-character-sheet.component';

describe('ReferenceCharacterSheetComponent', () => {
  let component: ReferenceCharacterSheetComponent;
  let fixture: ComponentFixture<ReferenceCharacterSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferenceCharacterSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenceCharacterSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
