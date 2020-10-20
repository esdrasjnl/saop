const bodyparser = require('body-parser');
const assert = require("assert");
const request = require("supertest");
const ususuario_curso = require("../routes/usuario_curso.router");
const usuario = require('../routes/usuario.router');
var express = require('express');
var app = express();
var cors = require('cors');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());

describe("Express usuario_curso", async() => {
    it("TetsCurso_usuario GET request /id", done => {
        request(app.use(ususuario_curso))
            .get("/")
            .send('091')
            .end(function(err, res) {
                if(err){
                    done(err);
                }else{
                    done();
                }
            });
    });
    it("TetsCurso_usuarioParameter GET request /id", done => {
        request(app.use(ususuario_curso))
            .get("/")
            .send('')
            .end(function(err, res) {
                if(err){
                    done(err);
                }else{
                    done();
                }
            });
    });
    it("TestCursodetalle GET request /detalleCurso", done => {
        request(app.use(ususuario_curso))
            .post("/detalleCurso")
            .send({ "carnet": "2023", "codigo_curso": "281" })
            .expect(200)
            .end((err, res) => {
                // console.log(res.body);
                // mensaje prueba 02
                if (err) {
                    done(err);
                } else {
                    done();
                }
            });
    });
    it("TestErrorDetalleCurso GET request /detalleCurso", done => {
        request(app.use(ususuario_curso))
            .post("/detalleCurso")
            .send({ "carnet": "2023" })
            .expect(200)
            .end((err, res) => {
                console.log(res.body);
                assert.equal(res.body.hola, 'fail');
                done();
            });
    });
    it("TestCursodetallefunction POST request /detalleCurso", done => {
        request(app.use(ususuario_curso))
            .post("{carnet:2023,codigo_curso:281}")
            .end((err, response) => {
                assert(typeof ususuario_curso.getDetalleCurso, 'function');
                done();
            });
    });
    it("TestCursodetalle GET request /detalleCurso", done => {
        request(app.use(ususuario_curso))
            .post("/detalleCurso")
            .send({ "carnet": "2023", "codigo_curso": "281" })
            .expect(200)
            .end((err, res) => {
                // console.log(res.body);
                if (err) {
                    done(err);
                } else {
                    done();
                }
            });
    });
    //------------------------Prueba unitaria para cursoGanado-------


})