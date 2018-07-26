import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RmWorkQaComponent } from './rm-work-qa.component';

describe('RmWorkQaComponent', () => {
  let component: RmWorkQaComponent;
  let fixture: ComponentFixture<RmWorkQaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RmWorkQaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RmWorkQaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
