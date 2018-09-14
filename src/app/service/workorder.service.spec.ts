import { TestBed, inject } from '@angular/core/testing';

import { WorkorderService } from './workorder.service';

describe('WorkorderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkorderService]
    });
  });

  it('should be created', inject([WorkorderService], (service: WorkorderService) => {
    expect(service).toBeTruthy();
  }));
});
