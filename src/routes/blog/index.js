const express = require("express");
const createBlog = require("../../controllers/blog/create");
const deleteBlog = require("../../controllers/blog/delete");
const getALLBlogs = require("../../controllers/blog/get");
const getOne = require("../../controllers/blog/get-one");
const updateBlog = require("../../controllers/blog/update");

const router = express.Router();

router.post("/",createBlog),
router.get("/",getALLBlogs),
router.get("/:id",getOne),
router.patch("/:id",updateBlog),
router.delete("/:id",deleteBlog)

module.exports = {blogRouter:router};