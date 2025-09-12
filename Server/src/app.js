const cookieParser = require("cookie-parser");
const express = require("express")
const userRoute = require("../routes/auth.user")

const app = express();


app.use(express.json()); 
app.use(cookieParser())

app.get("/",(req,res)=>{
    res.send("hello home route is working")
})


app.use("/api/user",userRoute)

module.exports = app;