var express = require("express")
var router = express.Router()
var authController = require("../controllers/signup")



router.route("/")
.get(authController.signUp_get )   // to avoid code redundancy 
.post(authController.signUp_post)



module.exports = router