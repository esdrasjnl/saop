import { TestBed } from '@angular/core/testing';

import { UsuarioService } from './usuario.service';

describe('UsuarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service2: UsuarioService = TestBed.get(UsuarioService);
    expect(service2).toBeTruthy();
  });
});
