import { Component, OnInit } from '@angular/core';
import { CursosGanadosService } from "../../services/cursos-ganados.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-cursos-ganados',
  templateUrl: './cursos-ganados.component.html',
  styleUrls: ['./cursos-ganados.component.css']
})
export class CursosGanadosComponent implements OnInit {

  constructor( public service:CursosGanadosService ,public router:Router ) { }

  ngOnInit() {
  }

  datos = {
    ref_carnet:0 ,
    ref_codigo_curso:0,
    ref_estado:1,
    str_comentario:''
  };

  carnet: number;
  codigo_curso: number;

}
