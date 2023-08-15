const express = require("express");
const routes = express.Router();
const AuthController = require("../Controller/auth.Controller.js");
const authmiddlewares = require("../Middlewares/auth.middlewares.js");
//routes.get("/", authmiddlewares.auth, AuthController.login);
routes.post("/login", authmiddlewares.auth, AuthController.login);
module.exports = routes;
