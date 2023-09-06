const express = require("express");
const routes = express.Router();
const AuthController = require("../Controller/auth.Controller.js");
const authmiddlewares = require("../Middlewares/auth.middlewares.js");
//routes.get("/", authmiddlewares.auth, AuthController.login2);
routes.post("/login", AuthController.login);
routes.get("/teszt", [authmiddlewares.auth], AuthController.teszt);
routes.post("/cards", [authmiddlewares.auth], AuthController.cards);
module.exports = routes;
