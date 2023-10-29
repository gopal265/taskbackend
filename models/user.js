var mongoose = require("mongoose");

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
        type : Number
    }

})

const User = mongoose.model("User2",userSchema);

module.exports = User;