const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
const path = require('path');
const bodyParser = require('body-parser');
const helpers = require('./helpers');
const errorHandlers = require('./handlers/errorHandlers');
const routes = require('./routes/routes');
const adminRoutes = require('./routes/adminRoutes');
const flash = require('connect-flash');



// create our Express app
const app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views')); // this is the folder where we keep our pug files
app.set('view engine', 'pug'); // we use the engine pug, mustache or EJS work great too

// serves up static files from the public folder. Anything in public/ will just be served up as the file it is
app.use(express.static(path.join(__dirname, 'public')));

// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Sessions allow us to store data on visitors from request to request
// This keeps users logged in and allows us to send flash messages
app.use(session({
  secret: process.env.SECRET,
  key: process.env.KEY,
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

// // The flash middleware let's us use req.flash('error', 'Shit!'), which will then pass that message to the next page the user requests
app.use(flash());

// every time there is a request pass on these tools/helpers 
app.use((req, res, next) => {
	res.locals.h = helpers;
  	res.locals.flashes = req.flash();
  	res.locals.user = req.user || null;  	
	next();
});

// After allllll that above middleware, we finally handle our own routes!
app.use('/', routes);
app.use('/admin', adminRoutes)

// Errors catch 404's
app.use(errorHandlers.notFound);

// Errors 
// app.use(errorHandlers.flashValidationErrors);

// Otherwise this was a really bad error we didn't expect! Shoot eh
if (app.get('env') === 'development') {
  /* Development Error Handler - Prints stack trace */
  app.use(errorHandlers.developmentErrors);
}


// done! we export it so we can start the site in start.js
module.exports = app;