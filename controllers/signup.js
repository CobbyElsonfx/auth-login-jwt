var User = require("../models/user")


// trying to send the json error the user
const handleError = (error) =>{
    console.log(error.message,  error.code)
    console.log(error)
    let errors = {email:"" , password:""}
    if(error.message.includes("user validation failed:")){
        Object.values(error.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message
            
        });
    }
    return errors
}

const signUp_get = (req,res)=>{
    res.render("signUpForm")
   }

const  signUp_post = async (req,res)=>{
    const {email , password} = req.body
    try {
        const newUser = await User.create({email,password}) 
        res.status(200).json(newUser)

        
    } catch (error) {
        handleError(error)
        res.status("400").json(error)
    }
}


module.exports = {
    signUp_get,
    signUp_post
}