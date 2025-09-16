// config to the dotenv  
require("dotenv").config()
const app = require("./src/app.js")
const connectDB = require("./src/db/db.js")
const port = process.env.PORT||5000;


// connect to the db 


connectDB();


app.listen(port,()=>{
    console.log(`the server is running on https://localhost${port}`)
})