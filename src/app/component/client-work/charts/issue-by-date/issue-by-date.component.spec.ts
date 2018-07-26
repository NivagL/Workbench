import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueByDateComponent } from './issue-by-date.component';

describe('IssueByDateComponent', () => {
  let component: IssueByDateComponent;
  let fixture: ComponentFixture<IssueByDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueByDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
