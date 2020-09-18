const assert=require("assert");
const request=require("supertest");
const ususuario_curso=require("../routes/usuario_curso.router");
const controller=require("../controller/usuario_curso.controller");
var express = require('express');
var app = express();


describe("Express usuario_curso",async ()=>{
   /* it("TetsCurso_usuario GET request /id", done=>{
      request(app.use(ususuario_curso))
      .get("/091")
      .end(function (err,res){
        assert.equal(typeof controller,'object');
        done();
      });
    });*/
    /*it("TestCursoFunction GET request /id", done=>{
        request(app.use(ususuario_curso))
        .get("/091")
        .expect(200)
        .end((err,response)=>{
          assert.equal(typeof controller.getUsuarioCurso,'function');
          done();
        });
    });*/
    it("TestCursodetalle GET request /detalleCurso",done=>{
        request(app.use(ususuario_curso))
       .get("f/obtener")
       .type("json")
       .send("/4")
      // .expect('Content-Type',/json/)
       .expect(200)
       .end( (err,res)=>{
        // console.log(res);
       //  assert.equal(typeof controller,'object');
        // console.log(res.body);
        // res.status.should.equal(200);
      // done();
        if (err) {
          done(err);
        }else{
          done();
        }
       });
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