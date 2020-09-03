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
  }

}
