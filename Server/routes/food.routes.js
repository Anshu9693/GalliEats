const express = require("express");
const foodController = require("../controllers/foodItem.controller");
const foodMiddleware = require("../middlewares/foodPatner.auth.middleware");
const userMiddleware = require("../middlewares/user.auth.middleware")
const foodRoute = express.Router();

const multer = require("multer");

const upload = multer({
  storage: multer.memoryStorage(),
});

//  [/api/food/    (protected)]
foodRoute.post(
  "/",
  foodMiddleware.foodPatnerMiddleware,
  upload.single("video"),
  foodController.creteFood
);


// [/api/food    (procted)]

foodRoute.get("/",userMiddleware.userAuthMiddleware,foodController.getFoodItem)

module.exports = foodRoute;
