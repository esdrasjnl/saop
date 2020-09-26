import { Component, OnInit } from '@angular/core';
import {CursoService  } from "../../services/curso.service";
import { Router } from '@angular/router';
import { modelocurso } from '../../models/modelocurso';

@Component({
  selector: 'app-visualizacion-pensum',
  templateUrl: './visualizacion-pensum.component.html',
  styleUrls: ['./visualizacion-pensum.component.css']
})
export class VisualizacionPensumComponent implements OnInit {

  constructor(
    public service:CursoService,public router:Router
    ) { }
  
  respuesta: any = [];
  respuestas=true;;
  public error=false;

  datos = {
    carnet: '',
    codigo_curso: ''
  };

  datoscurso = {
    carrera: 1
  };
  cursos: any=[];
  nombrecurso:string="";
  descripcion:string="";
  creditos="";
  estado="";
  carnet = "";
  
  ngOnInit() {
    this.obtenerCursos();
  }

  obtenerCursos()
  {
    console.log(this.datoscurso);
    this.service.getPensum(this.datoscurso)
    
    .subscribe(
      res => {
        console.log(res);
        this.cursos = res;
        console.log(res[0]);

      },
      err => this.error=true
    )
  }


}
