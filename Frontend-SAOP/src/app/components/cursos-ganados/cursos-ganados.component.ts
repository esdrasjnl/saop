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

  guardarCurso(curso) 
  {

    const tarjeta = {
      nombre_curso: curso.nombre_curso,
      creditos: curso.creditos,
      detalle: curso.detalle,
      codigo_curso: curso.codigo_curso
    }

    if(this.tarjetas.length == 0)
    {
      this.tarjetas.push(tarjeta);

    console.log(this.tarjetas);
    }
    else
    {
      for (let i = 0; i < this.tarjetas.length; i++) {
        if(this.tarjetas[i].codigo_curso == curso.codigo_curso)
        {
          return 0;
        }
      }
      this.tarjetas.push(tarjeta);
      
    }
    
      
   

  }

  eliminar(codigo) 
  {
    for (let i = 0; i < this.tarjetas.length; i++) {
      if(this.tarjetas[i].codigo_curso == codigo)
      {
        this.tarjetas.splice(i, 1);
        console.log(this.tarjetas);
      }
    }
  }

}
