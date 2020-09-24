import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizacionPensumComponent } from './visualizacion-pensum.component';

describe('VisualizacionPensumComponent', () => {
  let component: VisualizacionPensumComponent;
  let fixture: ComponentFixture<VisualizacionPensumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
});
