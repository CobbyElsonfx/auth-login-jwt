var jwt = require("jsonwebtoken")


const requireAuth = (req,res,next)=>{
    const token = req.cookies.jwt
    if(token){
        jwt.verify(token, "0558119187A" , (err, decoded)=>{
            if (err){
                console.log(err.message)
                res.redirect("/login")

            }else{
                console.log(decoded)
                next()

            }

        })

    }else{
        res.redirect("/login")
    }
    
}

module.exports = {requireAuth}