const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

const Token = async(user)=>{
    return jwt.sign({id:user._id , username:user.username} , process.env.JWT_SECRET , {expiresIn:process.env.TOKEN_DAY})
}
exports.register = async (req,res)=>{
    try {
        const {username , email , password} = req.body;
        if(!(username || email || password)){
            console.log("all fields are required");
        }
    
        const existeduser = await User.findOne({username})
        if(existeduser){
            console.log("user is already existed please login");
        }
        
        const user = await User.create({
            username,
            email,
            password
        })
        
        if(!user){
            console.log("user is not created");
        }
        const token = await Token(user);
        
        res.status(201).json({user , token});
    } catch (error) {
        res.status(500).json({
            status:"fail",
            message:error.message
        })
    }
}

exports.login = async (req,res)=>{
    try {
        const {email , password} = req.body;
    
        if(!(email || password)){
            console.log("all fields are required");
        }
        const user = await User.findOne({email});
        if(!user){
            console.log("user is not existed is database please register");
        }
        if(!user.ispasswordcorrect(password)){
            console.log("password is incorrect");
        }
        const token = await Token(user);
        res.cookie("token" , token , {
            httpOnly: true,
            secure: false,
            maxAge: 3600000,
        })
        return res.status(200).json({user , token})
    } catch (error) {
        res.status(500).json({
            status:"fail",
            message:error.message
        })
    }
}