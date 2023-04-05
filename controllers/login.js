var usermodel = require("../models/user")
var jwt = require("jsonwebtoken")

const handleError = (error) =>{
    console.log(error.message,  error.code)
    console.log(error)
    let errors = {email:"" , password:""}

    // checking error and populating the error object
    if(error.message === "Email does not exist"){
        errors.email = "Email not registered"
    }

    if(error.message === "Invalid Password"){
        errors.password = "Password is Invalid"
    }



    if(error.code ==  11000){
        errors.email = "Email already exist"
    }

    // check for the email if it doesnt exiast

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







const  login_get = (req,res)=>{
 res.render("loginForm")
}





const  login_post = async (req,res) =>{
    const {email, password} = req.body
    try {
      const newUser = await usermodel.login(email, password) //what then is stored in the user, rem we are return user in the static function we created in the user model when it succeds in finding the user email and comparing the paswords 
      const token = createToken(newUser._id)
      res.cookie("jwt", token, {maxAge: maxAge * 1000 , httpOnly:true}) 
      res.status(200).json({user:newUser._id })
        
        
    } catch (error) {
        const errors = handleError(error)
        res.status(400).json({errors})
    }
}


module.exports = {
    login_get,
    login_post
}