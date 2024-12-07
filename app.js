require("express-async-errors");
const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const errorHandler = require("./handlers/errorHandler");
const usersRoutes = require("./modules/users/users.routes");
const tasksRoutes = require("./modules/tasks/tasks.routes");


require("dotenv").config();
const app = express();
app.use(cors());
//app.use(bodyParser.json());
app.use(express.static('Task-Manager'));

app.use(express.static(path.join(__dirname, '../Task-Manager')));

mongoose.connect(process.env.mongo_connect, {}).then(
        ()=> console.log("Database Connected")
    ).catch((error)=>console.log("Database Not Connected", error.message || error))


app.use(express.json());



require("./models/users.model");
require("./models/tasks.model");

app.use("/", function (){
    const message = "Welcome To Taskmanager Homepage"
} )
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