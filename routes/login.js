
module.exports = router;
var express = require("express")
var router = express.Router()
var authController = require("../controllers/login")



router.get("/",authController.login_get)

router.post("/", authController.login_post)


module.exports = router