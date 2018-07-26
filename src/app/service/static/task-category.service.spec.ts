import { TestBed, inject } from '@angular/core/testing';

import { TaskCategoryService } from './task-category.service';

describe('TaskCategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskCategoryService]
    });
  });

  it('should be created', inject([TaskCategoryService], (service: TaskCategoryService) => {
    expect(service).toBeTruthy();
  }));
});
