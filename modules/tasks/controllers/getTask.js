const mongoose = require("mongoose");


const getTasks = async(request, response)=>
    {
        const taskModel = mongoose.model("tasks");

        const allTasks =await taskModel.find(
            {
                user_id: request.user._id,
                ...request.query
            })

        response.status(200).json(
            {
                status: "Successful",
                message: allTasks
            })
    }


    module.exports= getTasks;