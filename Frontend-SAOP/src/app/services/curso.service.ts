import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders}from "@angular/common/http"
import { map } from "rxjs/operators";
import { isNullOrUndefined } from "util";
import {modelocurso}from "../models/modelocurso"
import { core } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private http: HttpClient) { }
  Headers: HttpHeaders = new HttpHeaders(
    {
      "Content-Type": "application/json"
    }
  );

  Getcurso(){
    const url="http://localhost//";
    return this.http.get(url);
  }

  vercursos(usuario: string,curso:string) {
    const url = "http://localhost:3000/ver";
    return this.http.post(
      url, {
      "usuario": usuario,
      "curso":curso
    },
      {
        headers: this.Headers
      }
    ).pipe(map(data => data));
  }
}

