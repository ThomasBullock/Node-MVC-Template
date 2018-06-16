const mongoose = require('mongoose');

// Check version of node
if(parseFloat(process.versions.node) < 7.6) {
	console.log('Your on an older version of Node! You need 7.6 or greater!');
	process.exit();
}

// import environmental variables from our variables.env file
require('dotenv').config({ path: 'variables.env' });


// Connect to our Database and handle errors
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', (err) => {
  console.error(`🚫 → ${err.message}`);
});

// import all of our models
require('./models/Events');

const app = require('./app');
app.set('port', process.env.PORT || 8080);
const server = app.listen(app.get('port'), () => {
	console.log(`Express running → PORT ${server.address().port}`);
});