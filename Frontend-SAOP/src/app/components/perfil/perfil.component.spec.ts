import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilComponent } from './perfil.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('PerfilComponent', () => {
  let component2: PerfilComponent;
  let fixture: ComponentFixture<PerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule, RouterTestingModule.withRoutes([]),
        ReactiveFormsModule, FormsModule],
      declarations: [PerfilComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilComponent);
    component2 = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component2).toBeTruthy();
  });

  describe('perfil', () => {
    
    it('Llenar campos', () => {
      const carnet = null;
      const nombre = null;
      const apellido = null;
      const cui = null;
      const password = null;
      const carrera = null;
      component2.llenarCampos();
      expect(component2.carnet).toEqual(carnet);
      expect(component2.nombre).toEqual(nombre);
      expect(component2.apellido).toEqual(apellido);
      expect(component2.cui).toEqual(cui);
      expect(component2.password).toEqual(password);
      expect(component2.carrera).toEqual(carrera);
    });

    it('Prueba Unitaria llenar campos debe de fallar', () => {
      const carnet = '201213223';
      const nombre = null;
      const apellido = null;
      const cui = '0';
      const password = null;
      const carrera = null;
      component2.llenarCampos();
      expect(component2.carnet).toEqual(carnet);
      expect(component2.nombre).toEqual(nombre);
      expect(component2.apellido).toEqual(apellido);
      expect(component2.cui).toEqual(cui);
      expect(component2.password).toEqual(password);
      expect(component2.carrera).toEqual(carrera);
    });
  })

});
