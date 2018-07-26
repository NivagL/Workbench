import { TestBed, inject } from '@angular/core/testing';

import { AssetTypeService } from './asset-type.service';

describe('AssetTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AssetTypeService]
    });
  });

  it('should be created', inject([AssetTypeService], (service: AssetTypeService) => {
    expect(service).toBeTruthy();
  }));
});
