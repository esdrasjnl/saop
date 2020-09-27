import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroComponent } from './registro.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';


describe('RegistroComponent', () => {
  let component: RegistroComponent;
  let fixture: ComponentFixture<RegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule, RouterTestingModule.withRoutes([]),
        ReactiveFormsModule, FormsModule],
      declarations: [RegistroComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });




  describe('Prueba Registro', () => {
    it('Realizar prueba', function () {
      const datos = {
        carnet: 0,
        nombre: '',
        apellidos: '',
        cui: '',
        clave: '',
        ref_codigo_carrera:0
      };
      var s = new RegistroComponent(component.service, component.router);
      //  spyOn(s, 'registrar').and.returnValue();
      component.registrar;
      expect(component.error).toBeFalsy;
      expect(component.datos).toEqual(datos);

    });

  });


});
