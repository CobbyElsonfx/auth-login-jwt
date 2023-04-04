var mongoose = require("mongoose")
var {isEmail} = require("validator")
var bcrypt = require("bcrypt")

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


// fire a function before saving it in the Database

 userSchema.pre("save", async function(next){
    const salt = await  bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password,salt)
    next()
 })

// static method to login user
userSchema.statics.login = async function(email, password){

    const user = await  this.findOne({email})  // the find represents the user model so it could have been userSchema.fin
    if(user){
     const auth = await bcrypt.compare(password, user.password) // auth becomes truthy so we can say if it succeds it comparing it do that ...
     if(auth){
        return user
     }
     throw Error ("Invalid Password")
    }
    throw  Error ("Email does not exits")

}


//  const login = userSchema.static.

const User =  mongoose.model("user" , userSchema)
module.exports = User