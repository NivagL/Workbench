import { TestBed, inject } from '@angular/core/testing';

import { ChartsBaseService } from './charts-base.service';

describe('GoogleChartsBaseServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChartsBaseService]
    });
  });

  it('should be created', inject([ChartsBaseService], (service: ChartsBaseService) => {
    expect(service).toBeTruthy();
  }));
});
