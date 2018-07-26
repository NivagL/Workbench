import { TestBed, inject } from '@angular/core/testing';

import { NetworkTypeService } from './network-type.service';

describe('NetworkTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NetworkTypeService]
    });
  });

  it('should be created', inject([NetworkTypeService], (service: NetworkTypeService) => {
    expect(service).toBeTruthy();
  }));
});
