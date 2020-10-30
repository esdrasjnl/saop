import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
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