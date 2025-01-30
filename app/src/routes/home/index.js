"use strict";

const express = require("express");
const router = express.Router();
const ctrl = require("./home.ctrl");

// GET 라우트 추가
router.get("/", ctrl.output.hello);
router.get("/login", ctrl.output.login);

// POST 라우트
router.post("/login", ctrl.process.login);

// 다른 라우터 설정...
// router.get("/", (req, res) => { ... });

module.exports = router;
