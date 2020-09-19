import { Component, OnInit } from '@angular/core';
import { RegistroService } from "../../services/registro.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(public service: RegistroService, public router: Router) { }

  ngOnInit() {
  }

  datos = {
    carnet: 0,
    nombre: '',
    apellido: '',
    cui: '',
    password: '',
    carrera: '',
  };

  carnet:number;
  nombre:string="";
  apellido:string="";
  cui:number;
  clave:string="";
  carrera:string="";

  error = false;

  registrar() {

  }

}
