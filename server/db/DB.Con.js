const mongoose = require("mongoose");

const connection = async()=>{
    try {
        const con = await mongoose.connect(process.env.MONGOOSE_URL);
        console.log("database is connected");
    } catch (error) {
        console.error("database connection error " , error);
        process.exit(1);
    }
}

module.exports = connection;