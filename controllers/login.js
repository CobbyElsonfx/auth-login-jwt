const  login_get = (req,res)=>{
 res.render("loginForm")
}
const  login_post = (req,res) =>{
    res.send("Post request coming from the loin controllers")
}


module.exports = {
    login_get,
    login_post
}