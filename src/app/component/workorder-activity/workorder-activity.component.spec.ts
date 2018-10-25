import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderActivityComponent } from './workorder-activity.component';

describe('WorkOrderActivityComponent', () => {
  let component: WorkOrderActivityComponent;
  let fixture: ComponentFixture<WorkOrderActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkOrderActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkOrderActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
