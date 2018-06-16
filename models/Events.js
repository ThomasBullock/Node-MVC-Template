const mongoose = require('mongoose');
// when we query our db there are different ways we can wait for the data to come back 
// from the db ( because it happens asynchronously ) built in callbacks an external lib like bluebird
// or the built in ES6 Promise so we set mongoose.Promise to the global Promise (ie the one available to us in the browser)
mongoose.Promise = global.Promise;
const slug = require('slugs');

const eventsSchema = new mongoose.Schema({
	name: {
		type: String,
		trim: true,
		required: 'Please enter an event name'
	},
	slug: String,
	description: {
		type: String,
		trim: true
	},
	facebook: String
});

eventsSchema.pre('save', function(next, ) { // this needs to be a proper function 'cos we need this
	if(this.isModified(this.name)) {
		next(); // skip it
		return; // stop the function running
	}
	this.slug = slug(this.name);
	next();
})

module.exports = mongoose.model('Events', eventsSchema);