const mongoose = require('mongoose')

const foodPatnerSchema = mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    password:{
        type:String,
        required:true
    }
})


const foodPatnerModel = mongoose.model("foodPatner",foodPatnerSchema)

module.exports=foodPatnerModel;