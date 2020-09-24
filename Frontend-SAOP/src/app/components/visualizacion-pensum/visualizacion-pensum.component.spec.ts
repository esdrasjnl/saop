import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizacionPensumComponent } from './visualizacion-pensum.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('VisualizacionPensumComponent', () => {
  let component: VisualizacionPensumComponent;
  let fixture: ComponentFixture<VisualizacionPensumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
     imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([]),],
      declarations: [ VisualizacionPensumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizacionPensumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  
  describe('obtenerPensum', () => {
    it('visualizacion pensum', () => {
      const cursos = [] as any;
       var s = new VisualizacionPensumComponent(component.service, component.router);
      spyOn(s, 'obtenerCursos').and.returnValue(cursos);
      component.obtenerCursos();
      expect(component.error).toBeFalsy;
      expect(component.cursos).toEqual(cursos);

    });
  })

  describe('Respuesta Correcta', () => {
    it('visualizacion pensum Respuesta', () => {
      expect(component.respuestas).toEqual(true);
    });
  })

});
