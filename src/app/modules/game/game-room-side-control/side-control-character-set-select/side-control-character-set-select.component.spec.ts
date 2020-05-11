import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideControlCharacterSetSelectComponent } from './side-control-character-set-select.component';

describe('SideControlCharacterSetSelectComponent', () => {
  let component: SideControlCharacterSetSelectComponent;
  let fixture: ComponentFixture<SideControlCharacterSetSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideControlCharacterSetSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideControlCharacterSetSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
