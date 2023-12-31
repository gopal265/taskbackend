var User = require("../models/user.js")

exports.registerUser = async(req,res) =>{

    try{

        const user  = req.body;    // storing user data in user variable

        const findUser = await User.findOne({email:user.email});   // finding if user is already present in the database based on emailId

        // if user is not present we create the user  or else we return a message saying User is already present
        if(!findUser){
            const newUser = await User.create(user);
            return res.status(200).json({message:"User Create Successfully"})
        }

        res.status(400).json({message:"User is  already present."})
    }
    catch(error){
        res.status(500).json({message:"Server not responding"})
        console.log(error);
    }

}

exports.login = async(req,res) =>{
    try {
        const {email,password} = req.body;  // destructure the email and password
        const findUser = await User.findOne({email:email}); // check if user is present
        if(findUser){
            // if password is correct
            if(findUser.password == password){
                return res.status(200).json({message:"Login Successful",user:findUser});  // return the user to frontend
            }
            // if password is incorrect
            return res.status(400).json({message:"Incorrect password"})
        }

        return res.status(404).json({message:"User not found."})  // if user not found


    } catch (error) {
        res.status(500).json({message:"Server not responding"})

        console.log(error)
    }
}

exports.updateUser =  async(req,res) =>{
    try{
        const user = req.body
        const  findUser = await User.findOne({email:user.email}); // check user is there or not

        // if user is present
        if(findUser){
            const updateUser = await User.updateOne({email:user.email},user); // update the user data with latest data
            const user2 = await User.findOne({email:user.email})
            return res.status(200).json({message:"User updated",user:user2}); // return the user back to frontend

        }
        else{
            return res.status(404).json({message:"User not Found"})  // if user is not present
        }
    }
    catch(error){
        res.status(500).json({message:"Server not responding"})
        console.log(error)
    }
}