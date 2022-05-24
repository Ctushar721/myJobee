const mongoose = require("mongoose");

// to change the DB mongodb://localhost:27017/myapp will use myapp db 
const connectDatabase = () => { mongoose.connect(process.env.DB_LOCAL_URI,{}).then(con =>{
        console.log(`MongoDB database connected with host: ${con.connection.host}`);
    })
};

module.exports = connectDatabase;