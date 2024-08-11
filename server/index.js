const dotenv = require("dotenv");
dotenv.config({path:"./.env"});
const app = require("./app");
const connection = require("./db/DB.Con");


connection()
.then(()=>{
    app.listen(process.env.PORT || 4000 , ()=>{
        console.log("server is started");
    })
})
.catch((error)=>{
    console.error("database connection error in index:" , error);
    process.exit(1);
})
