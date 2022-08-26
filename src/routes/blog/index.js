const express = require("express");
const createBlog = require("../../controllers/blog/create");

const router = express.Router();

router.post("/",createBlog),

module.exports = {blogRouter:router};