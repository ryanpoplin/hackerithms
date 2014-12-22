(function () {

	"use strict";

	// APP FILE DEPENDENCIES...
	var util = require('./middleware/utils');
	var errorHandlers = require('./middleware/errorhandlers');
	var log = require('./middleware/log');
	var routes = require('./routes');
	var config = require('./config');
	
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
	app.use(cookieParser(util.cookieSecretKey()));
	app.use(session({
		secret: util.cookieSecretKey(),
		saveUninitialized: true,
		resave: true,
		store: new RedisStore({
			url: config.redisUrl
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

	// CONFIG ROUTES...
	app.use(util.templateRoutes);

	// HTTP VERB ROUTES ACCESS...
	app.get('/', routes.index);	
	app.get(config.routes.login, routes.login);	
	app.post(config.routes.login, routes.loginProcess);
	app.get(config.routes.logout, routes.logOut);
	app.get('/chat', [util.requireAuthentication], routes.chat);
	app.get('/error', function (req, res, next) {
		next(new Error('It\'s contrived...'));
	});

	// BASIC ERROR HANDLERS...
	app.use(errorHandlers.error);
	app.use(errorHandlers.notFound);

	// LOCALHOST PORT...
	app.listen(config.port);
	
	// TERMINAL MSG...
	console.log("App server running on port 3000...");

}());

