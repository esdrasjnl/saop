import { Component, OnInit } from '@angular/core';
import {CursoService} from "../../services/curso.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-cursos-ganados',
  templateUrl: './cursos-ganados.component.html',
  styleUrls: ['./cursos-ganados.component.css']
})
export class CursosGanadosComponent implements OnInit {

  constructor( public service:CursoService,public router:Router) { }

  datos = {
    ref_carnet: '' ,
    ref_codigo_curso:0,
    ref_estado:1,
    str_comentario:''
  };

  datoscurso = {
    carrera: localStorage.getItem('ref_codigo_carrera')
  };

  carnet = localStorage.getItem('carnet');
  codigo_curso: number;
  cursos: any=[];
  public error=false;

  ngOnInit() {
    this.obtenerCursos();
  }

  obtenerCursos() {
    console.log(this.datoscurso);
    this.service.getPensum(this.datoscurso)

      .subscribe(
        res => {
          console.log(res);
          this.cursos = res;
          console.log(res[0]);

        },
        err => this.error = true
      )
  }

}
