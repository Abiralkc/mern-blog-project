const express = require("express");
const { blogRouter } = require("./blog/index");

const router = express.Router();

router.use("/blogs", blogRouter);

module.exports = { indexRouter: router };