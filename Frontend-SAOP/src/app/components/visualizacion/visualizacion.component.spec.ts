import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { VisualizacionComponent } from './visualizacion.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
describe('VisualizacionComponent', () => {
  let component2: VisualizacionComponent;
  let fixture: ComponentFixture<VisualizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([]),],
      declarations: [VisualizacionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizacionComponent);
    component2 = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component2).toBeTruthy();
  });

  describe('obtenerCursos', () => {
    it('visualizacion', () => {
      const cursos = [201213223,'astrid',1] as any;
      //var s = new component.obtenerCursos();
      var s = new VisualizacionComponent(component2.service, component2.router);
      spyOn(s, 'obtenerCursos').and.returnValue(cursos);
      component2.obtenerCursos();
      expect(component2.error).toBeFalsy;
      expect(component2.cursos).toEqual(cursos);

    });
  })

  describe('Recibir cursos', () => {
    it('visualizacion detallada curso', () => {
      const datos = {
        carnet: '',
        codigo_curso: ''
      };
      var s = new VisualizacionComponent(component2.service, component2.router);
      spyOn(s, 'recibirCurso').and.returnValue();
      component2.recibirCurso(datos);
      expect(component2.error).toBeFalsy;
      expect(component2.datos).toEqual(datos);

    });

  })

});
