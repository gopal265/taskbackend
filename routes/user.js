var express = require("express");
const userController = require("../controllers/user.js")
const router = express.Router();

router.post("/register",userController.registerUser);
router.post('/login',userController.login);
router.put("/updateprofile",userController.updateUser);

module.exports = router;