import { Component, OnInit } from '@angular/core';
import {UsuarioService  } from "../../services/usuario.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private service:UsuarioService,private router:Router ) { }

  ngOnInit(): void {
  }


  datos = {
    carnet:0 ,
    password:''
  };

  password:string="";
  carnet: number;


  loguear()
  {
    //imprimir cosas jajaj hay se lo quitas
    console.log(this.carnet,this.password);
    this.datos.carnet=this.carnet;
    this.datos.password=this.password;
    console.log(this.datos);

    this.service.getusuario(this.datos)
    .subscribe(
      res => {
       // this.cursos = res;
       console.log(res);
      },
      err => console.log(err)
    )
  }
}
