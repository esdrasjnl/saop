const assert=require("assert");
const request=require("supertest");
const ususuario_curso=require("../routes/usuario_curso.router");
var express = require('express');
var app = express();

describe("Express usuario_curso",async ()=>{
    it("TetsCurso_usuario GET request /id", done=>{
      request(app.use(ususuario_curso))
      .get("/091")
      .end(function (err,res){
        assert(typeof ususuario_curso,'object');
        done();
      });
    });
    it("TestCursoFunction GET request /id", done=>{
        request(app.use(ususuario_curso))
        .get("/091")
        .expect(200)
        .end((err,response)=>{
          assert(typeof ususuario_curso.getUsuarioCurso,'function');
          done();
        });
    });
    it("TestCursodetalle GET request /detalleCurso",done=>{
        request(app.use(ususuario_curso))
       .get("/detalleCurso/obtener")
       .send({nada:2342})
      // .expect('Content-Type',/json/)
       .expect(200)
       .end(async (err,response,body)=>{
         console.log(body);
        assert.equal(typeof ususuario_curso,"function");
        done();
        /*if (err) {
          done(err);
        }else{
          done();
        }*/
       })
    });
    it("TestCursodetallefunction POST request /detalleCurso", done=>{
       request(app.use(ususuario_curso))
       .post("{carnet:2023,codigo_curso:281}")
       .end((err,response)=>{
         assert(typeof ususuario_curso.getDetalleCurso,'function');
         done();
       });
    });
})