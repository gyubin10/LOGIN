"use strict";

//모듈
const express = require("express");
const app = express();


//라우팅
const home = require("./routes/home/index.js");

//앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home); //use -> 미드웨어를 들롱해주는 메서드

module.exports = app;
