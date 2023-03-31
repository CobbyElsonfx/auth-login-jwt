var express = require("express")
var router = express.Router()
var authController = require("../controllers/signup")



router.get("/",authController.signUp_get )
router.post("/", authController.signUp_post)



module.exports = router