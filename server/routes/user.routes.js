const express = require("express");
const Router = express.Router();
const userController = require("../controller/user.controller");
Router.route("/register").post(userController.register);
Router.route("/login").post(userController.login);

module.exports = Router