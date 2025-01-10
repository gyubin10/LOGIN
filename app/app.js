"use strict";

//모듈
const express = require("express");
const app = express();
const path = require('path');
const bodyPareser = require("body-parser")


//라우팅
const home = require("./src/routes/home/index.js");

//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'src', 'public')));
app.use(bodyPareser.json());
//URL을 통해 전달되는 데이터에 한글,공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는문제 해결
app.use(bodyPareser.urlencoded({ extended: true }));

app.use("/", home); //use -> 미드웨어를 들롱해주는 메서드

module.exports = app;
