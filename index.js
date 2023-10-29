var express = require("express");
var cors = require('cors');
var userRouter = require("./routes/user.js")
var app = express();
var mongoose = require("mongoose")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors());
app.use("/api/user",userRouter);


const port = 4500;
const connection_url = "mongodb+srv://gopal265reddy:dgr2605@cluster0.wnw8rno.mongodb.net/?retryWrites=true&w=majority";

app.listen(port,()=>{
    mongoose.connect(connection_url)
    .then(()=>{
        console.log("Successfully Connected to Database")
        console.log("Server is running on port : " + port)
    })
    .catch(error =>{
        console.log(error);
    })
}
    
    
    )