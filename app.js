(function () {

	"use strict";

	// APP FILE DEPENDENCIES...
	var util = require('./middleware/utils');
	var errorHandlers = require('./middleware/errorhandlers');
	var log = require('./middleware/log');
	var routes = require('./routes');
	
	// NODE MODULE DEPENDENCIES...
	var express = require('express');
	var partials = require('express-partials');
	var cookieParser = require('cookie-parser');
	var session = require('express-session');
	// EXTEND THE SESSION MODULE...
	var RedisStore = require('connect-redis')(session);
	var bodyParser = require('body-parser');
	var csrf = require('csurf');
	var flash = require('connect-flash');

	// INITIALIZE THE EXPRESS/NODE APP...
	var app = express();

	// TEMPLATE CORE LAYOUT & TEMPLATE VIEW ENGINE...
	app.set('view options', {defaultLayout: 'layout'});
	app.set('view engine', 'ejs');

	// ...
	app.use(partials());
	app.use(log.logger);
	// ...
	app.use(express.static(__dirname + '/static'));

	// COOKIE, SESSION, AND REDIS INSTANCE SETUP...
	// config a more legit 'secret' key solution...
	var cookieSecret = function cookieId () {
		var text = '';
    	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    	var i;
    	for (i = 0; i < 64; i += 1) {
        	text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
	};
	var secret = cookieSecret();
	app.use(cookieParser(secret));
	app.use(session({
		secret: secret,
		saveUninitialized: true,
		resave: true,
		store: new RedisStore({
			url: 'redis://localhost'
		})
	}));

	// TYPE OF DATA FROM BROWSER SETUP...
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({
		extended: false
	}));

	// SECURITY...
	app.use(csrf());
	app.use(util.csrf);
	app.use(util.authenticated);

	// UX EXP...
	app.use(flash());

	// HTTP VERB ROUTES ACCESS...
	app.get('/', routes.index);	
	app.get('/login', routes.login);
	app.post('/login', routes.loginProcess);
	app.get('/chat', [util.requireAuthentication], routes.chat);
	app.get('/error', function (req, res, next) {
		next(new Error('It\'s contrived...'));
	});
	app.get('/logout', routes.logOut);

	// BASIC ERROR HANDLERS...
	app.use(errorHandlers.error);
	app.use(errorHandlers.notFound);

	// LOCALHOST PORT...
	app.listen(3000);
	
	// TERMINAL MSG...
	console.log("App server running on port 3000...");

}());

