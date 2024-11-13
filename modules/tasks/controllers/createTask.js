const mongoose = require("mongoose");



const createTask = async(request, response)=> 
    {

        const tasksModel = mongoose.model("tasks");
        
        const {title, description, deadline, priority, completed} = request.body

        if(!title) throw "Title is Required";
        if(!description) throw "Description is Required";
        if(!deadline) throw "Deadline is Required";
        if(!priority) throw "Priority is Required";
        if(!completed) throw "You Have To Choose between true or false";

        const validPriority = ["low", "medium", "high"];
        if(!validPriority.includes(priority)) throw ('Invalid priority level. Allowed values are: low, medium, high');

        await tasksModel.create(
            {
                user_id: request.user._id,
                title: title,
                description: description,
                deadline: deadline,
                priority: priority,
                completed: Boolean(completed)
            })


        response.status(201).json(
            {
                status: "Successful",
                message: "Task created Successfully"
            })
    }





    module.exports= createTask;