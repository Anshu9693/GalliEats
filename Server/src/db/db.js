const mongoose = require("mongoose")

function connectDB(){

    mongoose.connect(`${process.env.MONGODB_URL}/GalliEats`)
    .then(()=>{
        console.log("DB connected successfully")
    })
    .catch((err)=>{
        console.log("problem while connecting DB" , err)
    })

}

module.exports = connectDB;
