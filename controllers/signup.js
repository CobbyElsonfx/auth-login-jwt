var User = require("../models/user")

const signUp_get = (req,res)=>{
    res.render("signUpForm")
   }

const  signUp_post = async (req,res)=>{
    const {email , password} = req.email
    try {
        const newUser = await User.create({email,password}) 
        res.status(200).json(newUser)

        
    } catch (error) {
        console.log(error)
        res.status("400").send("User not created")
    }
}


module.exports = {
    signUp_get,
    signUp_post
}