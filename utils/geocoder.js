const nodeGeocoder = require('node-geocoder');
// FInd how the options came?
const options = {
    provider: process.env.GEOCODER_PROVIDER,
    httpAdapter: 'https',
    apiKey: process.env.GEOCODER_API_KEY,
    formatter: null
}
const geoCoder = nodeGeocoder(options);
module.exports = geoCoder;