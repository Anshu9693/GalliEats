const cookieParser = require("cookie-parser");
const express = require("express")
const userRoute = require("../routes/auth.user")
const foodPatanerRoute = require("../routes/auth.foodPatner")

const app = express();


app.use(express.json()); 
app.use(cookieParser())

app.get("/",(req,res)=>{
    res.send("hello home route is working")
})

// user routes
app.use("/api/user",userRoute)



// foodPataner Routs
app.use("/api/foodPatner",foodPatanerRoute)

module.exports = app;