import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor() { }

  carnet: string ="";
  nombre:string="";
  apellido: string="";
  cui: string="";
  password:string="";
  carrera:string="";
  
  ngOnInit() {
    this.llenarCampos();
  }

  llenarCampos()
  {
    this.carnet = localStorage.getItem('carnet');
    this.nombre = localStorage.getItem('nombre');
    this.apellido = localStorage.getItem('apellidos');
    this.cui = localStorage.getItem('CUI');
    this.password = localStorage.getItem('clave');
    this.carrera = localStorage.getItem('ref_codigo_carrera');
  }

}
