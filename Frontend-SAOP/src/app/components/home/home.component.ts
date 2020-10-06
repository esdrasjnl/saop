import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.cerrarSesion();
  }

  cerrarSesion() {
    localStorage.setItem('carnet', '');
    localStorage.setItem('nombre', '');
    localStorage.setItem('apellidos', '');
    localStorage.setItem('CUI', '');
    localStorage.setItem('clave', '');
    localStorage.setItem('ref_codigo_carrera', '');
  }



}
