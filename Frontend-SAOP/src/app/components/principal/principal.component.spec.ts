import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalComponent } from './principal.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';


describe('PrincipalComponent', () => {
  let component: PrincipalComponent;
  let fixture: ComponentFixture<PrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule, RouterTestingModule.withRoutes([]),
        ReactiveFormsModule, FormsModule],
      declarations: [ PrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  describe('Creditos Obtenidos ', () => {
    it('Comprobar carnet diferente de vacio', function () {
    const carnet ='201204278';
    expect(component.verificarcarnet(carnet)).toBeTruthy();
    });

  });

  describe('TDD obtener creditos', () => {
    it('comprobar que devuelva un numero de creditos', function () {
      component.carnet = '201213223';
      expect(component.obtenercreditos()).toBeTruthy();
   
    });
});
describe('TDD fallido obtener creditos', () => {
  it('comprobar que devuelva un numero de creditos', function () {
    component.carnet =null;
    expect(component.obtenercreditos()).toBeFalsy();
  });

  describe('TDD fallido porcentaje de creditos', () => {
    it('comprobar que devuelva un porcentaje de creditos', function () {
      component.carnet ='201213223';
      expect(component.obtenerporcentaje()).toBeTruthy();
    });
});

});
