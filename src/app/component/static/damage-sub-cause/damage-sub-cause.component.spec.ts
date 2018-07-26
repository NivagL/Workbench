import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DamageSubCauseComponent } from './damage-sub-cause.component';

describe('DamageSubCauseComponent', () => {
  let component: DamageSubCauseComponent;
  let fixture: ComponentFixture<DamageSubCauseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DamageSubCauseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DamageSubCauseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
