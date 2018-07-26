import { TestBed, inject } from '@angular/core/testing';

import { ColumnChartService } from './column-chart.service';

describe('ColumnChartServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ColumnChartService]
    });
  });

  it('should be created', inject([ColumnChartService], (service: ColumnChartService) => {
    expect(service).toBeTruthy();
  }));
});
