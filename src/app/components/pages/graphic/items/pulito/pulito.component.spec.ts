import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PulitoComponent } from './pulito.component';

describe('PulitoComponent', () => {
  let component: PulitoComponent;
  let fixture: ComponentFixture<PulitoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PulitoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PulitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
