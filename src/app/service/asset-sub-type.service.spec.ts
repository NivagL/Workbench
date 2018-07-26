import { TestBed, inject } from '@angular/core/testing';

import { AssetSubTypeService } from './asset-sub-type.service';

describe('AssetSubTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AssetSubTypeService]
    });
  });

  it('should be created', inject([AssetSubTypeService], (service: AssetSubTypeService) => {
    expect(service).toBeTruthy();
  }));
});
