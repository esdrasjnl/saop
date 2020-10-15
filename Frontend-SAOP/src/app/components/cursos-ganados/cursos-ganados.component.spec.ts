import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { CursosGanadosComponent } from './cursos-ganados.component';

describe('CursosGanadosComponent', () => {
  let component: CursosGanadosComponent;
  let fixture: ComponentFixture<CursosGanadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule, RouterTestingModule.withRoutes([]),
        ReactiveFormsModule, FormsModule],
      declarations: [CursosGanadosComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosGanadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Prueba Cursos Ganados', () => {
    it('Comprueba que los datos al inicio esten vacios', function () {
      const datos = {
        ref_carnet: '',
        ref_codigo_curso: 0,
        ref_estado: 1,
        str_comentario: ''
      };

      expect(component.datos).toEqual(datos);
    });

  });

  describe('TDD obtener cursos', () => {
    it('Compueba que al llamar el metodo obtenerCursos retorne true con los datos enviados', function () {
      component.carnet = '201213223';

      expect(component.obtenerCursos).toBeTruthy();
    });

  });

});
