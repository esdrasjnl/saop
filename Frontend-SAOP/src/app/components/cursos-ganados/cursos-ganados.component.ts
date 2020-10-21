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
    ref_carnet: '',
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
  datosC: any = [];
  enviar: string = "";
  e: boolean = false;

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

    const dato = {
      ref_carnet: localStorage.getItem('carnet'),
      ref_codigo_curso: curso.codigo_curso,
      estado: '1',
      str_comentario: ''
    };

    if (this.tarjetas.length == 0) {
      this.tarjetas.push(tarjeta);
      this.datosC.push(dato);
    }
    else {
      for (let i = 0; i < this.tarjetas.length; i++) {
        if (this.tarjetas[i].codigo_curso == curso.codigo_curso) {
          return 0;
        }
      }
      this.tarjetas.push(tarjeta);
      this.datosC.push(dato);
    }
  }

  eliminar(codigo) {
    for (let i = 0; i < this.tarjetas.length; i++) {
      if (this.tarjetas[i].codigo_curso == codigo) {
        this.tarjetas.splice(i, 1);
        this.datosC.splice(i, 1);
        this.e = true;
      }
    }
  }

  asignar() {

    for (let i = 0; i < this.datosC.length; i++) {
      console.log(this.tarjetas[i].nombre_curso);
      this.service.postCurso(this.datosC[i])
        .subscribe(
          res => {
            console.log(res);
              alert("CURSOS ASIGNADOS CORRECTAMENTE");
          },
          err => alert("NO SE PUEDEN ASIGNAR LOS CURSOS SELECCIONADOS")
        )

    }
    this.tarjetas = [];


  }

}
