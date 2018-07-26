import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskByDateComponent } from './task-by-date.component';

describe('TaskByDateComponent', () => {
  let component: TaskByDateComponent;
  let fixture: ComponentFixture<TaskByDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskByDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
