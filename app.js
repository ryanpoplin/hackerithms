// CORE APPLICATION...

(function () {

	"use strict";

	// REQUIRE NEEDED MODULES INTO THE APPLICATION...	
	var partials = require('express-partials');
	var cookieParser = require('cookie-parser');
	var session = require('express-session');
	var RedisStore = require('connect-redis')(session);
	var bodyParser = require('body-parser');
	var csrf = require('csurf');
	var flash = require('connect-flash');
	var express = require('express');
	
	// REQUIRE MAINTENANCE FILES...
	var util = require('./middleware/utils');
	var errorHandlers = require('./middleware/errorhandlers');
	var log = require('./middleware/log');
	var routes = require('./routes');
	var config = require('./config');
	
	// INITIALIZE THE EXPRESS APPLICATION...
	var app = express();
	
	// SET THE CORE TEMPLATE LAYOUT FOR THE APPLICATION AND TEMPLATE LIBRARY...
	app.set('view options', {defaultLayout: 'layout'});
	app.set('view engine', 'ejs');
	
	// EXTRAS...
	app.use(partials());
	app.use(log.logger);
	app.use(express.static(__dirname + '/static'));
	
	// COOKIE, SESSION, AND REDIS SETUP AND SECURITY...
	app.use(cookieParser(util.cookieSecretKey()));
	app.use(session({
		secret: util.cookieSecretKey(),
		saveUninitialized: true,
		resave: true,
		store: new RedisStore({
			url: config.redisUrl
		})
	}));
	
	// FORM SECURITY...
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({
		extended: false
	}));
	app.use(csrf());
	app.use(util.csrf);
	app.use(util.authenticated);

	// APP MESSAGES...
	app.use(flash());
	
	// TEMPLATE ROUTES, ETC...
	app.use(util.templateRoutes);
	app.get('/', routes.index);	
	app.get(config.routes.login, routes.login);	
	app.post(config.routes.login, routes.loginProcess);
	app.get(config.routes.logout, routes.logOut);
	app.get('/chat', [util.requireAuthentication], routes.chat);
	/*app.get('/error', function (req, res, next) {
		next(new Error('It\'s contrived...'));
	});*/

	// ERRORS...
	app.use(errorHandlers.error);
	app.use(errorHandlers.notFound);

	// PORT...
	app.listen(config.port);
	console.log("App server running on port " + config.port);

}());