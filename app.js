(function () {

	"use strict";

	var util = require('./middleware/utils');
	var errorHandlers = require('./middleware/errorhandlers');
	var log = require('./middleware/log');
	
	var express = require('express');
	var routes = require('./routes');
	var partials = require('express-partials');
	var cookieParser = require('cookie-parser');
	var session = require('express-session');
	var RedisStore = require('connect-redis')(session);
	var bodyParser = require('body-parser');
	var csrf = require('csurf');

	var app = express();

	app.set('view options', {defaultLayout: 'layout'});
	app.set('view engine', 'ejs');

	app.use(partials());
	app.use(log.logger);
	app.use(express.static(__dirname + '/static'));

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
	
	app.use(cookieParser(secret));

	app.use(session({
		secret: secret,
		saveUninitialized: true,
		resave: true,
		store: new RedisStore({
			url: 'redis://localhost'
		})
	}));

	app.use(bodyParser.json());
	
	app.use(bodyParser.urlencoded({
		extended: false
	}));

	app.use(csrf());

	app.use(util.csrf);

	app.use(util.authenticated);

	app.get('/', routes.index);
	
	app.get('/login', routes.login);

	app.post('/login', routes.loginProcess);

	app.get('/chat', [util.requireAuthentication], routes.chat);
	
	app.get('/error', function (req, res, next) {
		next(new Error('It\'s contrived...'));
	});

	app.use(errorHandlers.error);
	
	app.use(errorHandlers.notFound);

	app.listen(3000);
	
	console.log("App server running on port 3000...");

}());