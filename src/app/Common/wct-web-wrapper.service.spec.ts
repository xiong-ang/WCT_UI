import { TestBed } from '@angular/core/testing';

import { WctWebWrapperService } from './wct-web-wrapper.service';

describe('WctWebWrapperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WctWebWrapperService = TestBed.get(WctWebWrapperService);
    expect(service).toBeTruthy();
  });
});
