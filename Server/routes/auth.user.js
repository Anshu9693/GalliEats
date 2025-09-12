const express = require("express");
const userController = require("../controllers/user.controller")



const router = express.Router();


router.post("/register",userController.registerUser)
router.post("/login",userController.loginUser)
router.get("/logout",userController.logOut)


module.exports=router;