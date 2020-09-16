import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizacionComponent } from './visualizacion.component';

describe('VisualizacionComponent', () => {
  let component2: VisualizacionComponent;
  let fixture: ComponentFixture<VisualizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizacionComponent ]
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
});
