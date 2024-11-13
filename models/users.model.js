const mongoose = require("mongoose");

const usersSchema= new mongoose.Schema(
    {
        username:
        {
            type: String,
            required: [true, "Username is Required"]
        },
        email: 
        {
            type: String,
            required: [true, "Email is Required"],
            unique: true
        },
        password: 
        {
            type: String,
            required: [true, "Password is Required"]
        }
    },
    {
        timestamps: true
    }

    
)




const userModel = mongoose.model("users", usersSchema)

module.exports= userModel;