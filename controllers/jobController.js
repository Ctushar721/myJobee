const Job = require("../models/jobs");

// import this in jobs.js
exports.getjobs = async (req, res, next) => {
    var jobs = await Job.find();
    res.json({
        success: true, 
        results: jobs.length,
        data: jobs
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