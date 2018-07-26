import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeByWorkTypeComponent } from './employee-by-work-type.component';

describe('EmployeeByWorkTypeComponent', () => {
  let component: EmployeeByWorkTypeComponent;
  let fixture: ComponentFixture<EmployeeByWorkTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeByWorkTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeByWorkTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
