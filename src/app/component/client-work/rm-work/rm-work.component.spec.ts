import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RmWorkComponent } from './rm-work.component';

describe('AssetFaultWorkComponent', () => {
  let component: RmWorkComponent;
  let fixture: ComponentFixture<RmWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RmWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RmWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
