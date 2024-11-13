const mongoose = require("mongoose");






const tasksSchema = new mongoose.Schema(
    {
        user_id:
       {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
       },

        title: 
        {
            type: String,
            required: [true, "Title is Required"]
        },

        description: 
        {
            type: String,
            required: [true, "Description is Required"]
        },

        deadline:
        {
            type: Date,
            required: [true, "Deadline is Required"]
        },

        priority:
        {
            type:String,
            required: [true, "Title is Required"],
            enum:["low", "medium", "high"],
            default: 'low',
        }, 
        
          completed: 
          {
            type: Boolean,
            default: false,
          },
    }, 

    {
        timestamps:true
    }
)






    const tasksModel = mongoose.model("tasks", tasksSchema);



module.exports = tasksModel;