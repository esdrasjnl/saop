import { TestBed } from '@angular/core/testing';

import { CursosGanadosService } from './cursos-ganados.service';

describe('CursosGanadosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CursosGanadosService = TestBed.get(CursosGanadosService);
    expect(service).toBeTruthy();
  });
});
