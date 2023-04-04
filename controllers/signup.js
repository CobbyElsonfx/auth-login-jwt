var usermodel = require("../models/user")
var jwt = require("jsonwebtoken")



// trying to send the json error the user
const handleError = (error) =>{
    console.log(error.message,  error.code)
    console.log(error)
    let errors = {email:"" , password:""}

    if(error.code ==  11000){
        errors.email = "Email already exist"
    }

    if(error.message.includes("user validation failed:")){
        Object.values(error.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message
            
        });
    }
    return errors
}


//jwt
const  secret_key = "0558119187A"

const maxAge =   3 * 24 * 60 * 60

const createToken = (id)=>{
    return jwt.sign({id}, secret_key, {expiresIn: maxAge})
}



const signUp_get = (req,res)=>{
    res.render("signUpForm")
   }

const  signUp_post = async (req,res)=>{
    const {email , password} = req.body
    try {
        const newUser = await usermodel.create({email,password}) 
        const token = createToken(newUser._id)
        res.cookie("jwt", token, {maxAge: maxAge * 1000 , httpOnly:true})
        res.status(200).json({user: newUser._id})

        
    } catch (error) {
        handleError(error)
        res.status(400).json(error)
    }
}


module.exports = {
    signUp_get,
    signUp_post
}