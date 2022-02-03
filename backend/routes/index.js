// backend/routes/index.js
const csurf = require("csurf");
const express = require("express");
const router = express.Router();
const apiRouter = require("./api");

router.use("/api", apiRouter);

module.exports = router;
