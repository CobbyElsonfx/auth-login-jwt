const signUp_get = (req,res)=>{
    res.send("Get request Coming from the signup controller")
   }

const  signUp_post = (req,res)=>{
    res.send("Post request coming from the sigup controllers")
}


module.exports = {
    signUp_get,
    signUp_post
}