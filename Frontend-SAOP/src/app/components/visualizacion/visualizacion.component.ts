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

  constructor(private cursoservice:CursoService,private router:Router) { }
  usuario: string ="20150223";
  curso: string="";
  nombrecurso:string="";
  descripcion:string="";
  creditos="";
  estado="";
  arreglocurso:modelocurso[]=[];
  
  ngOnInit() {
    this.cursoservice.Getcurso().subscribe((res:modelocurso[])=>{
      this.arreglocurso=res;
      /*aqui llenar combo*/
    console.log(this.arreglocurso[0].nombre);
    })
  }


  vercurso(){
    console.log(this.curso);

    this.cursoservice.vercursos(this.usuario,this.curso).subscribe((res)=>{
        console.log(res["data"]);
        let cursodatos:modelocurso=res["data"];
        this.nombrecurso=cursodatos.nombre;
        this.descripcion=cursodatos.descripcion;
        this.creditos=cursodatos.creditos+"";
        this.estado=cursodatos.estado;

      
    })


  }

}
