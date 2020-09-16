import { Component, OnInit } from '@angular/core';
import {CursoService  } from "../../services/curso.service";
import { Router } from '@angular/router';
import { modelocurso } from '../../models/modelocurso';

@Component({
  selector: 'app-visualizacion',
  templateUrl: './visualizacion.component.html',
  styleUrls: ['./visualizacion.component.css']
})
export class VisualizacionComponent implements OnInit {

  constructor(
    public service:CursoService,public router:Router
    ) { }
  
  respuesta: any = [];
  public error=false;
  public error1=false;
  datos = {
    carnet: '',
    codigo_curso: ''
  };

  cursos: any=[];
  nombrecurso:string="";
  descripcion:string="";
  creditos="";
  estado="";
  carnet = "201213223";
  
  ngOnInit() {
    this.obtenerCursos();
  }

  obtenerCursos()
  {
    this.service.getCurso(this.carnet)
    .subscribe(
      res => {
        this.cursos = res;

      },
      err => this.error=true
    )
  }

  recibirCurso(curso)
  {
    this.datos.carnet = curso.carnet;
    this.datos.codigo_curso = curso.codigo_curso;

     this.service.getDetalleCurso(this.datos)
    .subscribe(
      res => {
        this.nombrecurso = res[0].nombre_curso;
        this.creditos = res[0].creditos;
        
        if(res[0].estado == 1)
        {
          this.estado = 'CURSO APROBADO';
        }
        else
        {
          this.estado = 'CURSO NO APROBADO';
        }
      console.log(res);
      },
      err => console.log(err)
    
    )
  }

  

  
 

}
