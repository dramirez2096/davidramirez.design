import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Shift3Component } from './shift3.component';

describe('Shift3Component', () => {
  let component: Shift3Component;
  let fixture: ComponentFixture<Shift3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Shift3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Shift3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
