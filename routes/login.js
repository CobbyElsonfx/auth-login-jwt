
module.exports = router;
var express = require("express")
var router = express.Router()
var authController = require("../controllers/login")



router.route("/")
.get(authController.login_get)
.post(authController.login_post)


module.exports = router