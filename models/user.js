var mongoose = require("mongoose");
// create a schema for the user because mongodb do  not have a structure 
const userSchema = new mongoose.Schema({

    firstName:{
        type : String,
        require : true,
        default : "Not Added"  
    },
    lastName:{
        type: String,
        default :"Not Added"
    },
    email :{
        type : String,
        require : true
    },
    password:{
        type : String,
        require : true
    },
    age :{
        type : Number
    },
    dob :{
        type : Date,
    },
    mobileNumber:{
        type : Number,
        default : 1234567890
    }

})

const User = mongoose.model("User2",userSchema);

module.exports = User;