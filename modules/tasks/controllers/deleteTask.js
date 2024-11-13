const mongoose = require("mongoose");

const deleteTask = async(request, response) => 
    {
        const taskModel = mongoose.model("tasks");

        const {task_id}= request.params

        const getTasks = await taskModel.findOne(
            {
                _id: task_id
            })

            if(!getTasks) throw " Task Not Found"




            response.status(200).json(
                {
                    status: "Sucessfull",
                    message: "Task Deleted Successfully"
                })
    }



    module.exports = deleteTask;