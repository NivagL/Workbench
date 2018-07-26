import { TestBed, inject } from '@angular/core/testing';

import { DamageCauseService } from './damage-cause.service';

describe('DamageCauseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DamageCauseService]
    });
  });

  it('should be created', inject([DamageCauseService], (service: DamageCauseService) => {
    expect(service).toBeTruthy();
  }));
});
