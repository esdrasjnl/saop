import { Component, OnInit } from '@angular/core';
import {UsuarioService  } from "../../services/usuario.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(public service:UsuarioService,public router:Router ) { }

  ngOnInit() {
    this.llenar();
    this.obtenercreditos();
  }

  nombre:string="";
  carnet:string="";
  cajacr:string="";
  cajacp:string="";
  llenar()
  {
    this.nombre = localStorage.getItem('nombre');
    this.carnet=localStorage.getItem('carnet');
  }
  verificarcarnet(carnet)
  {
    if(carnet!=""){
      return true;
    }
    return false;
  }



  obtenercreditos(){
    this.service.getcreditos(this.carnet)
    .subscribe(
      res => {
        this.cajacr=res[0].Creditos;
    
       
      },
      err => {
      return false;
    }
    )
    if (this.cajacr!=" " || this.carnet!=null){
      return true;
     }else{
   return false;
     }
  }

  obtenerporcentaje(){
    this.service.getPorcentaje(this.carnet)
    .subscribe(
      res => {
        this.cajacp=res[0].Creditos;
      },
      err => {
      return false;
    }
    )
    if (this.cajacp!=" " || this.carnet!=null){
      return true;
     }else{
   return false;
     }
  }
}
