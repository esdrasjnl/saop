import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.llenar();
  }

  nombre:string="";

  llenar()
  {
    this.nombre = localStorage.getItem('nombre');
  }

}
