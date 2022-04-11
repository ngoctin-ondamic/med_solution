import { Request, Response } from "express";
import { CorsOptions } from "cors";
const express = require("express");
var cors = require('cors');
const app = express();
var bodyParser = require('body-parser');
var router = express.Router();
const path = require("path");
var port = process.env.PORT || 8080;
const userRouter = require('./src/routes/user.routes');
const applicationRouter = require('./src/routes/application.routes')
const allowedOrigins = ['http://localhost:3000'];
const options : CorsOptions = {
    origin: allowedOrigins
  };

app.use(cors(options));
app.use(bodyParser.urlencoded({ extended:  true }));
app.use(bodyParser.json());
app.use('/api/user',userRouter);
app.use('/api/application',applicationRouter)
app.listen(port);
console.log('UserContact API is runnning at ' + port);
