import { TestBed } from '@angular/core/testing';

import { UsuerService } from './usuer.service';

describe('UsuerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsuerService = TestBed.get(UsuerService);
    expect(service).toBeTruthy();
  });
});
