import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { VisualizacionComponent } from './visualizacion.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('VisualizacionComponent', () => {
  let component: VisualizacionComponent;
  let fixture: ComponentFixture<VisualizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule, RouterTestingModule.withRoutes([]),
        ReactiveFormsModule, FormsModule],
      declarations: [VisualizacionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Recibir cursos', () => {
    it('Verifica que los datos al inicio se encuentren vacios', () => {
      const datos = {
        carnet: '',
        codigo_curso: ''
      };
      expect(component.datos).toEqual(datos);

    });

  describe('obtenerCursos', () => {
    it('Verifica que los datos se envien correctamente', () => {
      const cursos = [201213223,'astrid',1] as any;
      //var s = new component.obtenerCursos();
      var s = new VisualizacionComponent(component.service, component.router);
      spyOn(s, 'obtenerCursos').and.returnValue(cursos);
      component.obtenerCursos();
      expect(component.error).toBeFalsy(); 
    });
  })



  })

});
