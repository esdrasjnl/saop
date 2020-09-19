import { Component, OnInit } from '@angular/core';
import { RegistroService } from "../../services/registro.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(
    public service: RegistroService, public router: Router
  ) { }

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

  carnet: number;
  nombre: string = "";
  apellido: string = "";
  cui: string = "";
  clave: string = "";
  carrera: string = "";

  error = false;

  registrar() {

    this.datos.carnet = this.carnet;
    this.datos.nombre = this.nombre;
    this.datos.apellido = this.apellido;
    this.datos.cui = this.cui;
    this.datos.password = this.clave;
    this.datos.carrera = this.carrera.toLowerCase();

    this.service.postRegistro(this.datos)
      .subscribe(
        res => {
          if (res != "") {
            alert("USUARIO REGISTRADO EXITOSAMENTE!");
          }
          else {
            alert("USUARIO NO SE PUEDE REGISTRAR, VUELVA A INTENTARLO!");
            this.error = true;
          }
          this.limpiar();
        },
        err => this.error = true
      )
  }

  limpiar() {
    this.clave = '';
    this.carnet = 0;
    this.nombre = '';
    this.apellido = '';
    this.cui = '';
    this.clave = '';
    this.carrera = '';
  }

}
