import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistePageComponent } from './registe-page.component';

describe('RegistePageComponent', () => {
  let component: RegistePageComponent;
  let fixture: ComponentFixture<RegistePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
