const  login_get = (req,res)=>{
 res.send("Get request Coming from the login controller")
}
const  login_post = (req,res) =>{
    res.send("Post request coming from the loin controllers")
}


module.exports = {
    login_get,
    login_post
}