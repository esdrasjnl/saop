const assert = require("assert");
const request = require("supertest");
const usuarios = require("../routes/usuario.router");
var express = require("express");
const { response } = require("express");
var app = express();
const bodyparser = require('body-parser');
var express = require('express');
var app = express();
var cors = require('cors');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());

describe("Express usuarios", async() => {
    it("TEstgetUser POST request /agregar", (done) => {
        request(app.use(usuarios))
            .post("/agregar")
            .send({ "nombre": "Marcos", "apellidos": "Torres", "cui": "8888889", "clave": "123A", "ref_codigo_carrera": "001" })
            .expect(200)
            .end((err, res) => {
                console.log(res.body);
                if (err) {
                    done(err);
                } else {
                    done();
                }
            });
    });

    it("TestgetUserError POST request /agregar", (done) => {
      request(app.use(usuarios))
        .post("/agregar")
        .send({"carnet": "2015201221","nombre": "Marcos","apellidos": "Torres","cui":"8888889","clave": "123A","ref_codigo_carrera": "001"})
        .expect(200)
        .end((err,res)=>{
          if(err){
              done(err);
          }else{
              done();
          }
         });
    });
    it("TestPostUserDataNotvalid POST REQUEST /agregar",(done)=>{
        request(app.use(usuarios))
        .post("/agregar")
        .send({"carnet": "2016201221","nombre": "Marcos","apellidos": "Torres","cui":"soucui","clave": "123A","ref_codigo_carrera": "sistemas"})
        .expect(200)
        .end((err,res)=>{
            if(err){
                done(err);
            }else{
                done();
            }
        })
    })
//----------------------obtener datos de usuario-----------------------------
    it("TestObtenerUsuario GET request obtenerUsuario/:carnet", (done) => {
        request(app.use(usuarios))
        .get("/obtenerUsuario/201503986")
        //.send("201503986")
        .expect(200)
        .end((err, response) => {
                if(err){
                    done(err);
                }else{
                    done();
                }
            });
    });
    it("TestObtenerUsuarioFail GET request obtenerUsuario/:carnet", (done) => {
        request(app.use(usuarios))
        .get("/obtenerUsuario/h")
        //.send("201503986")
        .expect(200)
        .end((err, response) => {
                if(err){
                    done(err);
                }else{
                    done();
                }
            });
    });
    it("TestObtenerUsuarioNotFound GET request obtenerUsuario/:carnet", (done) => {
        request(app.use(usuarios))
        .get("/obtenerUsuario/1999")
        //.send("201503986")
        .expect(200)
        .end((err, response) => {
                if(err){
                    done(err);
                }else{
                    done();
                }
            });
    });
//-----------Prueba unitaria sobre lgin ---------
    it("TestLogin POST request /inicioSesion", (done) => {
        request(app.use(usuarios))
        .post("/inicioSesion")
        .send("{carnet:2023,clave:123}")
        .expect(200)
        .end((err, response) => {
              if(err){
                  done(err);
              }else{
                  done();
              }
            });
    });
    it("TestLoginDatoIncorrect POST request /inicioSesion", (done) => {
        request(app.use(usuarios))
       .post("/inicioSesion")
        .send({"carnet":"202","clave":"123"})
        .expect(200)
        .end((err, response) => {
            if(err){
                done(err);
            }else{
                done();
            }    
        });
    });
    it("TestLoginDatoDatoerror POST request /inicioSesion", (done) => {
        request(app.use(usuarios))
       .post("/inicioSesion")
        .send({"carnet":"n","clave":"123"})
        .expect(200)
        .end((err, response) => {
            if(err){
                done(err);
            }else{
                done();
            }    
        });
    });

});