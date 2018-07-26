import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskByClientComponent } from './task-by-client.component';

describe('TaskByClientComponent', () => {
  let component: TaskByClientComponent;
  let fixture: ComponentFixture<TaskByClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskByClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskByClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
