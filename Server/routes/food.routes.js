const express = require("express")
const foodController = require("../controllers/foodItem.controller")
const foodMiddleware = require("../middlewares/foodPatner.auth.middleware")
const foodRoute = express.Router()

const multer  = require('multer')

const upload = multer({
storage:multer.memoryStorage()
})



//  [/api/food/    (protected)]
foodRoute.post("/",foodMiddleware.foodPatnerMiddleware,upload.single("video"),foodController.creteFood)

module.exports= foodRoute