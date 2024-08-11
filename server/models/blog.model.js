const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        trim:true,
        required:true
    },
    body:{
        type:String,
        trim:true,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
},{timestamps:true});
const Blog = mongoose.model("Blog" , blogSchema);
module.exports = Blog;
