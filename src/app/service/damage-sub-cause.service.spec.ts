import { TestBed, inject } from '@angular/core/testing';

import { DamageSubCauseService } from './damage-sub-cause.service';

describe('DamageSubCauseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DamageSubCauseService]
    });
  });

  it('should be created', inject([DamageSubCauseService], (service: DamageSubCauseService) => {
    expect(service).toBeTruthy();
  }));
});
