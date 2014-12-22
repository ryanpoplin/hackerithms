(function () {

	"use strict";

	var util = require('./middleware/utils');
	var errorHandlers = require('./middleware/errorhandlers');
	var log = require('./middleware/log');
	var routes = require('./routes');
	var config = require('./config');
	
	var express = require('express');
	var partials = require('express-partials');
	var cookieParser = require('cookie-parser');
	var session = require('express-session');
	var RedisStore = require('connect-redis')(session);
	var bodyParser = require('body-parser');
	var csrf = require('csurf');
	var flash = require('connect-flash');

	var app = express();

	app.set('view options', {defaultLayout: 'layout'});
	app.set('view engine', 'ejs');

	app.use(partials());
	app.use(log.logger);
	app.use(express.static(__dirname + '/static'));

	app.use(cookieParser(util.cookieSecretKey()));
	app.use(session({
		secret: util.cookieSecretKey(),
		saveUninitialized: true,
		resave: true,
		store: new RedisStore({
			url: config.redisUrl
		})
	}));

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({
		extended: false
	}));

	app.use(csrf());
	app.use(util.csrf);
	app.use(util.authenticated);

	app.use(flash());

	app.use(util.templateRoutes);

	app.get('/', routes.index);	
	app.get(config.routes.login, routes.login);	
	app.post(config.routes.login, routes.loginProcess);
	app.get(config.routes.logout, routes.logOut);
	app.get('/chat', [util.requireAuthentication], routes.chat);
	app.get('/error', function (req, res, next) {
		next(new Error('It\'s contrived...'));
	});

	app.use(errorHandlers.error);
	app.use(errorHandlers.notFound);

	app.listen(config.port);
	
	console.log("App server running on port 3000...");

}());

