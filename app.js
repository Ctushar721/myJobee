var express = require("express");
let app = express();


const dotenv = require('dotenv');
//Setting up config.env file variables
dotenv.config({path:"./config/config.env"})

//Connecting to database
const connectDatabase = require("./config/database");
connectDatabase();
 

//
// https://www.geeksforgeeks.org/express-js-express-json-function/
app.use(express.json());

//Expreiment with Middleware
// const middleware1 = (req,res,next) => {
//     console.log('I am midlware 1 MWONE');
//     req.change = "this is added after recieeing the request by MWONE";
//     next();

// }
// const middleware2 = (req,res,next) => {
//     console.log('I am midlware 2 MEAOWW');
//     next();
// }
// app.use([middleware1,middleware2]);

// adding all the routes
const jobs = require("./routes/jobs");
const auth = require("./routes/auth");
app.use('/api/v1',jobs); // Now send request from postman http://localhost:3000/api/v1/jobs
app.use('/api/v1',auth);






PORT = process.env.PORT
app.listen(PORT, ()=>{ // or use PORT || 3000 
    console.log("Server for Jobee has started");
});