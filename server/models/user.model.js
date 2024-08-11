const mongoose = require("mongoose");
const bcyrpt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        lowercase:true,
        trim:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        required:true
    }
} , {timestamps:true});

userSchema.pre("save" , async function(next){
    if(!this.isModified("password")){
        return next();
    }
    this.password = await bcyrpt.hash(this.password , 10);
})

userSchema.methods.ispasswordcorrect = async function(password){
    return await bcyrpt.compare(password , this.password);
}
const User = mongoose.model("User" , userSchema);
module.exports = User;