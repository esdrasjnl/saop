import { Component, OnInit } from '@angular/core';
import { CursoService } from "../../services/curso.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-cursos-ganados',
  templateUrl: './cursos-ganados.component.html',
  styleUrls: ['./cursos-ganados.component.css']
})
export class CursosGanadosComponent implements OnInit {

  constructor(public service: CursoService, public router: Router) { }

  datos = {
    ref_carnet: localStorage.getItem('ref_codigo_carrera'),
    ref_codigo_curso: 0,
    ref_estado: 1,
    str_comentario: ''
  };



  datoscurso = {
    carrera: localStorage.getItem('ref_codigo_carrera')
  };

  carnet = localStorage.getItem('carnet');
  codigo_curso: number;
  cursos: any = [];
  public error = false;
  c = 0;

  //VARIABLES PARA GENERAR LAS TARJETAS DE LA ASIGNACION
  tarjetas: any = [];

  ngOnInit() {
    this.obtenerCursos();
  }

  obtenerCursos() {
    this.service.getPensum(this.datoscurso)

      .subscribe(
        res => {
          this.cursos = res;
        },
        err => this.error = true
      )
  }

  guardarCurso(curso) {

    const tarjeta = {
      nombre_curso: curso.nombre_curso,
      creditos: curso.creditos,
      detalle: curso.detalle,
      codigo_curso: curso.codigo_curso
    }

    this.tarjetas.push(tarjeta);


  }

}
