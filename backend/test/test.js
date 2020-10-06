const assert=require("assert");
const request=require("supertest");
const usuarios=require("../routes/usuario.router");
var express = require('express');
var app = express();
describe("Express usuarios",async ()=>{
    it("Handles GET request /id",done=>{
        request(app.use(usuarios))
        .get('/2023')
        .end((err,response)=>{
            assert(typeof usuarios,'object');
            done();
        })
    });
});