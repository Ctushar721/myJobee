var express = require("express");
const router = express.Router();
// importing job controller methods
const {getjobs, newJob} = require("../controllers/jobController.js");
// import {getjobs} from "../controllers/jobController.js"; to get this working package.json mein type is module

// router.get('/jobs', (req,res) =>{
//     // moved this line to jobController.js res.json({success: true, noteThat: "here you will get info" })
// })
 
router.route('/jobs').get(getjobs);

router.route('/job/new').post(newJob);

module.exports = router;
// res.json() function sends a JSON response.