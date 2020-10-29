const bodyparser = require('body-parser');
const assert = require("assert");
const request = require("supertest");
const creditos =require("../routes/creditos.route");
var express = require('express');
var app = express();
var cors = require('cors');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());

