const foodModel = require("../models/food.model");
const jwt = require("jsonwebtoken");
const sorateServices = require("../services/storage.services");
const { v4: uuid } = require("uuid");

async function creteFood(req, res) {
//   console.log(req.foodPatner);
//   console.log(req.body);
//   console.log(req.file);

  const uploadFileResult = await sorateServices.uploadFile(
    req.file.buffer,
    uuid()
  );
  //   console.log(uploadFileResult);

  const foodItem = await foodModel.create({
    name: req.body.name,
    video: uploadFileResult.url,
    description: req.body.description,
    foodPatner: req.foodPatner._id,
  });

  res.status(201).json({
    message: "food created succesfully",
  });


}

module.exports = {
  creteFood,
};
