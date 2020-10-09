import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosGanadosComponent } from './cursos-ganados.component';

describe('CursosGanadosComponent', () => {
  let component: CursosGanadosComponent;
  let fixture: ComponentFixture<CursosGanadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursosGanadosComponent ]
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
});
