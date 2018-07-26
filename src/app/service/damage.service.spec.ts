import { TestBed, inject } from '@angular/core/testing';

import { DamageService } from './damage.service';

describe('DamageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DamageService]
    });
  });

  it('should be created', inject([DamageService], (service: DamageService) => {
    expect(service).toBeTruthy();
  }));
});
