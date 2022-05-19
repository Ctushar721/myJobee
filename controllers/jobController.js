// import this in jobs.js
exports.getjobs = (req, res, next) => {
    res.json({
        success: true, 
        noteThat: "here you will get info",
        AddedByMWONE: req.change
 });
};