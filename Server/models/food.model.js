const mongoose = require("mongoose");
const foodSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    video:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    foodPatner:{
        type:String,
        ref:"foodPatner"
    }
})


const foodModel =  mongoose.model("food",foodSchema);

module.exports = foodModel;