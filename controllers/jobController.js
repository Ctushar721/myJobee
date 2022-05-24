const Job = require("../models/jobs");

// import this in jobs.js
exports.getjobs = (req, res, next) => {
    res.json({
        success: true, 
        noteThat: "here you will get info",
 });
};

exports.newJob = async (req, res, next) => {
    // Adding user to body
    // req.body.user = req.user.id;
    const job = await Job.create(req.body); // model.create
    res.status(200).json({
        success: true,
        message: 'Job Created.',
        data: job
    });
};