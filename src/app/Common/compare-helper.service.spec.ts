import { TestBed } from '@angular/core/testing';

import { CompareHelperService } from './compare-helper.service';

describe('CompareHelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompareHelperService = TestBed.get(CompareHelperService);
    expect(service).toBeTruthy();
  });
});
