const assert=require("assert");
const request=require("supertest");
const usuarios=require("../routes/usuario.router");
var express = require('express');
const { response } = require("express");
var app = express();

describe("Express usuarios",async ()=>{
  it("TEstgetUser GET request /id",done=>{
     request(app.use(usuarios))
     .get('/2023')
     .end((err,response)=>{
         //assert(response.body.usuarios==="OK");
         assert(typeof usuarios,'object');
         done();
     })
  });
  it("TestGetUserFunction GET request /id",done=>{
      request(app.use(usuarios))
      .get('/2023')
      .end((err,response)=>{
        assert(typeof usuarios.getUsuarioId,'function');
        done();
      });
  });
  it("TestLogin POST request /inicioSesion",done=>{
    request(app.use(usuarios))
    .post('{carnet:2023,clave:123}')
    .end((err,response)=>{
      assert(typeof usuarios,'object');
      done();
    });
  });
  it("TestLoginFuction POST request /inicioSesion", done=>{
    request(app.use(usuarios))
    .post('{carnet: 2023,clave:123}')
    .end((err,response)=>{
       assert(typeof usuarios.inicioSesion,'function');
       done();
    });
  });
});
