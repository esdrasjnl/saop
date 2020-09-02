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

  respuesta:any = [];

  datos = {
    carnet:0 ,
    password:''
  };

  password:string="";
  carnet: number;


  loguear()
  {
    this.datos.carnet=this.carnet;
    this.datos.password=this.password;
    console.log(this.datos);

    this.service.getusuario(this.datos)
    .subscribe(
      res => {
       if(res != false)
       {
         this.respuesta = res[0];
         this.almacenarDatos();
         this.router.navigate(['/principal']);
       }
       else
       {
         alert("USUARIO INCORRECTO, VUELVE A INTENTAR!");
       }
       this.limpiar();
      },
      err => console.log(err)
    )
  }

  almacenarDatos()
{
  localStorage.setItem('nombre',this.respuesta[0]);
  localStorage.setItem('apellido',this.respuesta[1]);
  localStorage.setItem('carnet',this.respuesta[2]);
  console.log(localStorage.getItem('nombre'));
}

limpiar()
{
  this.datos.carnet = 0;
  this.datos.password = '';
}
}


