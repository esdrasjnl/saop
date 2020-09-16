import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginComponent', () => {
  let component2: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule, RouterTestingModule.withRoutes([]),
        ReactiveFormsModule, FormsModule],
      declarations: [LoginComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component2 = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component2).toBeTruthy();
  });

  describe('Prueba Login', () => {
    it('Realizar prueba', function () {
      const datos = {
        carnet: 0,
        clave: ''
      };
      var s = new LoginComponent(component2.service, component2.router);
      spyOn(s, 'loguear').and.returnValue();
      component2.loguear;
      expect(component2.error).toBeFalsy;
      expect(component2.datos).toEqual(datos);

    });
  
    it('Realiza pueba unitaria login que debe de fallar por que espera que al inicio no tenga esos valores',function()
    {
      const datos = {
        carnet:201213223,
        clave: 'astrid'
      };
      var s = new LoginComponent(component2.service, component2.router);
      spyOn(s, 'loguear').and.returnValue();
      component2.loguear;
      expect(component2.error).toBeFalsy;
      expect(component2.datos).toEqual(datos);
    });
    
  });

});
