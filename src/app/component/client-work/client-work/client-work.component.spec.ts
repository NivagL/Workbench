import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientWorkComponent } from './client-work.component';

describe('ClientWorkComponent', () => {
  let component: ClientWorkComponent;
  let fixture: ComponentFixture<ClientWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
