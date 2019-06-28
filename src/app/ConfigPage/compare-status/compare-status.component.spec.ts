import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareStatusComponent } from './compare-status.component';

describe('CompareStatusComponent', () => {
  let component: CompareStatusComponent;
  let fixture: ComponentFixture<CompareStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
