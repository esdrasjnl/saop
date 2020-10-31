import { Component, OnInit } from '@angular/core';
import {UsuarioService  } from "../../services/usuario.service";
import { Router } from '@angular/router';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

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
    this.obtenerporcentaje();
  }

  nombre:string="";
  carnet:string="";
  cajacr:string = "";
  cajacp:string="";

  public doughnutChartLabels: Label[] = ['%Creditos Obtenidos', '%Creditos Faltantes'];
  public doughnutChartData: MultiDataSet;
  public doughnutChartType: ChartType = 'doughnut';


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
        this.cajacp=res[0].Porcentaje;
        this.doughnutChartData = [[Number(this.cajacp), 100]];
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


    // events
    public chartClicked(e:any): void {
      console.log(e);
    }
  
    public chartHovered(e:any): void  {
      console.log(e);
    }
}
