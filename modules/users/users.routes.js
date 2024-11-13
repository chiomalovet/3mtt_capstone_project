const express = require("express");
const { route } = require("express/lib/router");
const mongoose = require("mongoose");
const login = require("./controllers/login");
const register = require("./controllers/register");
const auth = require("../../middleware/auth");




const usersRoutes = express.Router();


usersRoutes.post("/login", login);
usersRoutes.post("/register", register);



usersRoutes.use(auth);





 
module.exports= usersRoutes