import { TestBed } from '@angular/core/testing';

import { CursoService } from './curso.service';

describe('CursoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service2: CursoService = TestBed.get(CursoService);
    expect(service2).toBeTruthy();
  });
});
