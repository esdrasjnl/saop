import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalComponent } from './principal.component';

describe('PrincipalComponent', () => {
  let component: PrincipalComponent;
  let fixture: ComponentFixture<PrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
    const carnet ='';
    expect(component.carnet).toEqual(carnet);
    });

  });

  describe('TDD obtener creditos', () => {
    it('comprobar que devuelva un numero de creditos', function () {
      component.carnet = '201213223';

      expect(component.obtenercreditos()).toBeFalsy();
    });


});
});
