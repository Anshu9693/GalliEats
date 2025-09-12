const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function registerUser(req, res) {
  try {
    const { fullName, email, password } = req.body;

    // Check if email already exists
    const emailExist = await userModel.findOne({ email });
    if (emailExist) {
      return res.status(400).json({ success: false, message: "Email already exists" });
    }

    // Hash password
    const hashPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = await userModel.create({
      fullName,
      email,
      password: hashPassword,
    });

    // Generate token
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" } // optional: token expiry
    );

    // Set cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // secure only in production
      sameSite: "strict",
    });

    // Send response
    res.status(201).json({
      success: true,
      "token": token,
      message: "User registered successfully",
      user: {
        id: user._id,
        email: user.email,
        fullName: user.fullName,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

async function loginUser(req, res) {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "user not exist" });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET
    );

    res.cookie("token", token);

    res.status(201).json({
      success: true,
      token: token,
      message: "login Successfully ",
      user: {
        id: user._id,
        email: user.email,
        fullName: user.fullName,
      },
    });

  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
}

async function logOut(req,res){
    res.clearCookie(),
    res.status(200).json({
      message:"user SuccessFully logOut"
    })
}

module.exports = { registerUser, loginUser ,logOut};
