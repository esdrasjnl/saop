import { TestBed } from '@angular/core/testing';

import { CursoService } from './curso.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
describe('CursoService', () => {
  beforeEach(() => TestBed.configureTestingModule({ imports:[
    HttpClientTestingModule, RouterTestingModule.withRoutes([])],}));

  it('should be created', () => {
    const service2: CursoService = TestBed.get(CursoService);
    expect(service2).toBeTruthy();
  });
});
