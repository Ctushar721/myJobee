const mongoose = require('mongoose');
const validator = require('validator'); // for email validation
const slugify = require('slugify'); // to add slug to db
// const geoCoder = require('../utils/geocoder'); // for pincode
// var db1 = mongoose.useDB('db1');
const jobSchema = new mongoose.Schema({
    title : {
        type : String,
        required : [true, 'Please enter Job title.'],
        trim : true,
        maxlength : [100, 'Job title can not exceed 100 characters.']
    },
});

// Creating Job Slug before saving
jobSchema.pre('save', function(next) {
    // Creating slug before saving to DB
    this.slug = slugify(this.title, {lower : true});

    next();
});

// Setting up Location
// jobSchema.pre('save', async function(next) {
//     const loc = await geoCoder.geocode(this.address);

//     this.location = {
//         type : 'Point',
//         coordinates : [loc[0].longitude, loc[0].latitude],
//         formattedAddress : loc[0].formattedAddress,
//         city : loc[0].city,
//         state : loc[0].stateCode,
//         zipcode : loc[0].zipcode,
//         country : loc[0].countryCode
//     }
// });


module.exports = mongoose.model('Job', jobSchema);