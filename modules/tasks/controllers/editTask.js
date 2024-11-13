const mongoose = require("mongoose");



const editTask = async(request, response)=> 
    {
        
        const tasksModel = mongoose.model("tasks");

        const {task_id, title, description, deadline, priority, completed}= request.body;

        if(!task_id) throw "Task_id is Required";
        if(!title) throw "Title is Required";
        if(!description) throw "Description is Required";
        if(!deadline) throw "Deadline is Required";
        if(!priority) throw "Priority is Required";
        if(!completed) throw "You Have To Choose between true or false";

        const validPriority = ["low", "medium", "high"];
        if(!validPriority.includes(priority)) throw ('Invalid priority level. Allowed values are: low, medium, high');

        const getTask = await tasksModel.findOne(
            {
                _id: task_id
            })

            if(!getTask) throw " Task Not Found"


            await tasksModel.updateOne(
                {
                    _id: task_id
                },
                {
                    title, 
                    description,
                    deadline,
                    priority,
                    completed: Boolean(completed)
                }, 
                {
                    runValidators: true
                })

        response.status(200).json(
            {
                status: " Sucessfull",
                message: "Task Edited Successfully"
            })
    }




    module.exports= editTask;