const assert=require("assert");
const request=require("supertest");
const ususuario_curso=require("../routes/usuario_curso.router");
var express = require('express');
const { response } = require("express");
var app = express();

describe("Express usuario_curso",async ()=>{
    it("TetsCurso_usuario GET request /id", done=>{
      request(app.use(ususuario_curso))
      .get("/091")
      .end((err,response)=>{
        assert(typeof ususuario_curso,'object');
        done();
      });
    });
    it("TestCursoFunction GET request /id", done=>{
        request(app.use(ususuario_curso))
        .get("/091")
        .end((err,response)=>{
          assert(typeof ususuario_curso.getUsuarioCurso,'function');
          done();
        });
    })
})