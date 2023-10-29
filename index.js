var express = require("express");
var cors = require('cors');
var userRouter = require("./routes/user.js")
var app = express();
var mongoose = require("mongoose")

app.use(express.json())  // parse the  json data
app.use(express.urlencoded({extended:true}))  // parse the url
const  corsOptions={
    origin : "https://profileui.onrender.com/"
}
app.use(cors(corsOptions));  // to allow cors origin request 
app.use("/api/user",userRouter);  // user related routes


const port = 4500;  // port 
const connection_url = "mongodb+srv://gopal265reddy:dgr2605@cluster0.wnw8rno.mongodb.net/?retryWrites=true&w=majority"; // connection url of mongodb atlas

app.listen(port,()=>{
    mongoose.connect(connection_url)   // connecting to the data base 
    .then(()=>{
        console.log("Successfully Connected to Database")
        console.log("Server is running on port : " + port)
    })
    .catch(error =>{
        console.log(error);  // if any error occurs
    })
}
    
    
    )