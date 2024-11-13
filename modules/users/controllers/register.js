const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwtManager = require("../../../managers/jwtManager");




const register = async(request, response)=> 
    {
        const userModel = mongoose.model("users");

        const {username, email, password, confirm_password}= request.body;
         

        if(!username) throw "Username is Required";
        if(!email) throw "Email is Required";
         if(!password) throw " Password is Required";
         if(password.length < 5) throw "Password Should be at least 5 caharacter long";
         if (confirm_password !== password) throw "Password Does Not Match"


         const duplicateEmail = await userModel.findOne(
            {
                email:email
            })
            if(duplicateEmail) throw " Email Already Existed";


            const hashedPassword = await bcrypt.hash(password, 12)

         createdUser = await userModel.create(
            {
                username: username,
                password: hashedPassword,
                confirm_password: confirm_password,
                email: email
            })



            const accessToken = jwtManager(createdUser);

        response.status(201).json(
            {
            
                message: "Registered Successfully",
                accessToken: accessToken
            })
    }




    module.exports = register;