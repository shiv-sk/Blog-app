const express = require("express");
const app = express();
const corsoption = {
    origin:"http://localhost:5173",
    sameOrigin:false
}
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const cors = require("cors");
app.use(cors(corsoption));
const userRouter = require("./routes/user.routes");
const blogRouter = require("./routes/blog.routes");

//User-Router
app.use("/api/v1/user" , userRouter);
app.use("/api/v1/blog" , blogRouter);
module.exports = app;