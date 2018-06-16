// Javascript dates suck so horray for moment!
exports.moment = require('moment');

// Dump is a handy debugging function we can use to sort of "console.log" our data
exports.dump = (obj) => JSON.stringify(obj, null, 2);

exports.siteName = `My Rad Template!`