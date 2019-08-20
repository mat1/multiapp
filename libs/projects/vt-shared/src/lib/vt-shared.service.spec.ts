import { TestBed } from '@angular/core/testing';

import { VtSharedService } from './vt-shared.service';

describe('VtSharedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VtSharedService = TestBed.get(VtSharedService);
    expect(service).toBeTruthy();
  });
});
