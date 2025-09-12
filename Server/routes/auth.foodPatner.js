const express = require("express")
const foodpatnerController = require("../controllers/foodPatner.controller")


const router = express.Router();

router.post("/register",foodpatnerController.register)
router.post("/login",foodpatnerController.login)
router.get("/logout",foodpatnerController.logOut)


module.exports= router;