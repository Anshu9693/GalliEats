const mongoose = require('mongoose')

const foodPatnerSchema = mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
   
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:String,
        required:true,
        unique:true
    },
    address:{   
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    }
})


const foodPatnerModel = mongoose.model("foodPatner",foodPatnerSchema)

module.exports=foodPatnerModel;