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
    clave:''
  };

  password:string="";
  carnet: number;


  loguear()
  {
    this.datos.carnet=this.carnet;
    this.datos.clave=this.password;
    console.log(this.datos);

    this.service.getusuario(this.datos)
    .subscribe(
      res => {
       if(res != "")
       {
         this.respuesta = res[0];
         console.log(this.respuesta);
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
  localStorage.setItem('carnet',this.respuesta.carnet);
  localStorage.setItem('nombre',this.respuesta.nombre);
  localStorage.setItem('apellidos',this.respuesta.apellidos);
  localStorage.setItem('CUI',this.respuesta.CUI);
  localStorage.setItem('clave',this.respuesta.clave);
  localStorage.setItem('ref_codigo_carrera',this.respuesta.ref_codigo_carrera);

  
  console.log(localStorage.getItem('carnet'));

}

limpiar()
{
  this.password = '';
}
}


