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
    
  }


}
