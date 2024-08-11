const Blog = require("../models/blog.model");

exports.newBlog = async (req,res)=>{
    try {
        const {body , title , user} = req.body;
        if(!(body || title || user)){
            console.log("all fileds are required");
        }
        const blog = await Blog.create({
            title,
            body,
            user
        })
        if(!blog){
            console.log("blog is not created");
        }
        return res.status(201).json({blog});
    } catch (error) {
        res.status(500).json({
            status:"fail",
            message:error.message
        })
    }
}

//finding all blogs

exports.allBlogs = async(req,res)=>{
    try {
        const blogs = await Blog.find();
        if(!blogs){
            console.log("blogs are missing");
        }
        return res.status(200).json({blogs});
    } catch (error) {
        res.status(500).json({
            status:"fail",
            message:error.message
        })
    }
}

//update the blog
exports.updateBlog = async(req,res)=>{
    try {
        const blogId = req.params.id;
        const {body , title} = req.body;
        const blog = await Blog.findByIdAndUpdate(blogId , {title , body} , {new:true});
        return res.status(200).json({blog});
    } catch (error) {
        res.status(500).json({
            status:"fail",
            message:error.message
        })
    }
}

//deleting the blog
exports.deleteBlog = async (req,res)=>{
    try {
        
        const deleteblog = await Blog.findByIdAndDelete(req.params.id);
        if(!deleteblog){
            return res.status(404).json({messgae:"blog is not found"})
        }
        return res.status(200).json({"message":"blog is delted successfully"})
    } catch (error) {
        res.status(500).json({
            status:"faiil",
            message:error.message
        })
    }
}

//shwing the specified user bloga
exports.myBlog = async(req,res)=>{
   try {
     const userId = req.params.Id;
     const myblogs = await Blog.find({user:userId});
     return res.status(200).json({myblogs});
   } catch (error) {
    res.status(500).json({
        status:"fail",
        message:error.message
    })
   }
}