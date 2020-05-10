import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideControlCharacterSelectComponent } from './side-control-character-select.component';

describe('SideControlCharacterSelectComponent', () => {
  let component: SideControlCharacterSelectComponent;
  let fixture: ComponentFixture<SideControlCharacterSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideControlCharacterSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideControlCharacterSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
