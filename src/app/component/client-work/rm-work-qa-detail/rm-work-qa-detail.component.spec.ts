import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RmWorkQaDetailComponent } from './rm-work-qa-detail.component';

describe('RmWorkQaDetailComponent', () => {
  let component: RmWorkQaDetailComponent;
  let fixture: ComponentFixture<RmWorkQaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RmWorkQaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RmWorkQaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
