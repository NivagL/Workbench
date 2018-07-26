import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueTodayComponent } from './issue-today.component';

describe('IssueTodayComponent', () => {
  let component: IssueTodayComponent;
  let fixture: ComponentFixture<IssueTodayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueTodayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
