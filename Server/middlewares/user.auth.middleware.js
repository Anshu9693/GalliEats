const foodModel = require("../models/food.model");
const userModel= require("../models/user.model")
const foodPatnerModel = require("../models/foodPatner.model");
const jwt = require("jsonwebtoken");


async function userAuthMiddleware(req,res,next){
    const token = req.cookies.token;
    if(!token){
        return res.status(400).json({
            message:"user Unauthorize"
        })
    }

    try {
        const decode = jwt.verify(token,process.env.JWT_SECRET);
        const user = await userModel.findById(decode.id)
        req.user=user;
        next();

    } catch (error) {
        res.status(400).json({
            message:"invalid token " + error.message
        })
    }


}

module.exports={
    userAuthMiddleware
}