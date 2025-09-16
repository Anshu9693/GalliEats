const foodModel = require("../models/food.model");
const foodPatnerModel = require("../models/foodPatner.model");
const jwt = require("jsonwebtoken");

async function foodPatnerMiddleware(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      message: "You are unauthorize",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const foodPatner = await foodPatnerModel.findById(decoded.id);

    req.foodPatner = foodPatner;
    next();
  } catch (error) {
    res.status(500).json({
      message: "invalid tokein " + error.message,
    });
  }
}


module.exports= {
    foodPatnerMiddleware
}