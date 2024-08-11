const express = require("express");
const blogController = require("../controller/blog.controller");
const Router = express.Router(blogController.newBlog);
Router.route("/").post(blogController.newBlog).get(blogController.allBlogs);;
Router.route("/:id").patch(blogController.updateBlog).delete(blogController.deleteBlog);
Router.route("/:Id").get(blogController.myBlog);
module.exports = Router