var mongoose = require("mongoose")
var {isEmail} = require("validator")

const userSchema = new mongoose.Schema(
    {
        email:{
            type: String,
            required: [true, "Email is required"],
            unique: true,
            lowercase: true,
            validate:[isEmail, "Type a valid email"]
        }, 
        password:{
            type:String,
            required: true,
            minlength: [6, "Password should be more than 6 characters"]
        }
    }
)


const User =  mongoose.model("user" , userSchema)
module.exports = User