import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RmWorkQaListComponent } from './rm-work-qa-list.component';

describe('RmWorkQaListComponent', () => {
  let component: RmWorkQaListComponent;
  let fixture: ComponentFixture<RmWorkQaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RmWorkQaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RmWorkQaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
