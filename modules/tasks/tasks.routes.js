const express = require("express");
const mongoose = require("mongoose");
const auth = require("../../middleware/auth");
const createTask = require("./controllers/createTask");
const editTask = require("./controllers/editTask");
const deleteTask = require("./controllers/deleteTask");
const getTasks = require("./controllers/getTask");






const tasksRoutes = express.Router();

tasksRoutes.use(auth);
tasksRoutes.get("/", getTasks);
tasksRoutes.post("/create", createTask);
tasksRoutes.put("/", editTask);
tasksRoutes.delete("/:task_id", deleteTask)



 module.exports = tasksRoutes;
