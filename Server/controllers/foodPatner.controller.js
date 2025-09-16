const foodPatnerModel = require("../models/foodPatner.model")
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt");

async function register(req,res){
        try {
            const {fullName,email,password,KitchenName,address,phone} = req.body;
            const emailExist = await foodPatnerModel.findOne({email})
            if(emailExist){
                res.status(400).json({
                    Message:"this email is already exist"
                }) }

                   const hashPassword = await bcrypt.hash(password,10)

                const foodPatner= await foodPatnerModel.create({
                    fullName,
                    email,
                    password:hashPassword,
                    KitchenName,
                    phone,
                    address
                })

                const token  = jwt.sign({
                    id:foodPatner._id
                },process.env.JWT_SECRET)
                
                res.cookie("token",token)

                res.status(201).json({
                    success:true,
                    "token:":token,
                    message:"Food patner register successfully",
                    foodPatner:{
                        id:foodPatner._id,
                        fullName:foodPatner.fullName,
                        KitchenName:foodPatner.KitchenName,
                        address:foodPatner.address,
                        phone:foodPatner.phone,
                        email:foodPatner.email

                    }
                })

        } catch (error) {
            res.status(500).json({message:error.message})
        }
}


async function login(req,res){
    try {
        const{email,password}=req.body;
        const foodPataner=await foodPatnerModel.findOne({email})
        if(!foodPataner){
            res.status(400).json({
                success:false,
                message:"user not found"
            })
        }
        const isValidPassword = await bcrypt.compare(password,foodPataner.password)
        if(!isValidPassword){
            res.status(400).json({
                success:false,
                message:"email or password incorrect"
            })
        }


        const token = jwt.sign({
            id:foodPataner._id
        },process.env.JWT_SECRET)

        res.cookie("token",token);

        res.send({
            success:true,
            message:"Login successfull",
            foodPataner:{
                id:foodPataner._id,
                fullName:foodPataner.fullName,
                email:foodPataner.email,
                phone:foodPataner.phone,
                KitchenName:foodPataner.KitchenName,
                address:foodPataner.address
            }
        })


    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

async function logOut(req,res){
    res.clearCookie("token")
    res.status(200).json({
        message:"logout Successfully"
    })
}


module.exports={register,login,logOut}