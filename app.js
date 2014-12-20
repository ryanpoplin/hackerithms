(function () {

	"use strict";

	// the order counts here...

	var express = require('express');
	var routes = require('./routes');
	var errorHandlers = require('./middleware/errorhandlers');
	var log = require('./middleware/log');
	// ...
	var partials = require('express-partials');
	// ...
	var cookieParser = require('cookie-parser');
	var session = require('express-session');
	// connect-redis 'extends' the session...
	var RedisStore = require('connect-redis')(session);

	var app = express();

	// ...
	app.set('view options', {defaultLayout: 'layout'});
	app.set('view engine', 'ejs');

	// ...
	app.use(partials());
	app.use(log.logger);
	app.use(express.static(__dirname + '/static'));

	// ...	
	var cookieSecret = function cookieId () {
		var text = '';
    	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    	var i;
    	for (i = 0; i < 24; i += 1) {
        	text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
	};

	var secret = cookieSecret();

	// ...
	
	app.use(cookieParser(secret));

	app.use(session({
		secret: secret,
		saveUninitialized: true,
		resave: true,
		store: new RedisStore({
			url: 'redis://localhost'
		})
	}));

	app.get('/', routes.index);
	app.get('/login', routes.login);

	// ...
	app.post('/login', routes.loginProcess);

	app.get('/chat', routes.chat);
	// ...
	app.get('/error', function (req, res, next) {
		next(new Error('It\'s contrived...'));
	});

	/*app.use(function(req, res, next) {
		if (req.session.pageCount) {
			req.session.pageCount += 1;
		} else {
			req.session.pageCount = 1;
			next();
		}
	});*/

	app.use(errorHandlers.error);
	app.use(errorHandlers.notFound);

	app.listen(3000);
	console.log("App server running on port 3000...");

}());