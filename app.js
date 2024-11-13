require("express-async-errors");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const errorHandler = require("./handlers/errorHandler");
const usersRoutes = require("./modules/users/users.routes");
const tasksRoutes = require("./modules/tasks/tasks.routes");


require("dotenv").config();
const app = express();
app.use(cors());




mongoose.connect(process.env.mongo_connect, {}).then(
        ()=> console.log("Database Connected")
    ).catch((error)=>console.log("Database Not Connected", error.message || error))


app.use(express.json());


require("./models/users.model");
require("./models/tasks.model");


app.use("/api/users/", usersRoutes);
app.use("/api/tasks", tasksRoutes);


// end of routing
app.all("*", (request, response, next)=> 
    {
        response.status(404).json(
            {
                status: "Failed",
                message: "Page Not Found"
            })
    })

    //end of routing
    app.use(errorHandler)


app.listen(8000, ()=> console.log("Server Connected Successfully"))