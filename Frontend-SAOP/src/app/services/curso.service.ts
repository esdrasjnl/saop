import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders}from "@angular/common/http"
import { map, throttleTime } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class CursoService {

  api = 'http://localhost:4000/api';

  constructor(
    private http: HttpClient
    ) { }


  getCurso(carnet)
  {
    return this.http.get<any>(`${this.api}/usuarioCurso/${carnet}`);
  }

  getDetalleCurso(curso)
  {
    return this.http.post<any>(`${this.api}/usuarioCurso/detalleCurso`,curso);
  }
  

  
}

