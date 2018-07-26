import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DamageCauseComponent } from './damage-cause.component';

describe('DamageCauseComponent', () => {
  let component: DamageCauseComponent;
  let fixture: ComponentFixture<DamageCauseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DamageCauseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DamageCauseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
