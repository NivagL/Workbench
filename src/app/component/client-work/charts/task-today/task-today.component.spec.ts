import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskTodayComponent } from './task-today.component';

describe('TaskTodayComponent', () => {
  let component: TaskTodayComponent;
  let fixture: ComponentFixture<TaskTodayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskTodayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
