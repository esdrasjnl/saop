import { Component, OnInit } from '@angular/core';
import {UsuarioService  } from "../../services/usuario.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(public service:UsuarioService,public router:Router ) { }

  ngOnInit() {
  }

   datos = {
    carnet: 0,
    clave: '',
    nombre:'',
    cui :'',
   password : '',
     carrera : '',
  };

 error=false;

 registrar(){
   
 }

}
