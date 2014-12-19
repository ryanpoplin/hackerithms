(function () {

	"use strict";

	// the order counts here...

	var express = require('express');
	var app = express();
	var routes = require('./routes');
	var errorHandlers = require('./middleware/errorhandlers');
	var log = require('./middleware/log');
	// ...
	var partials = require('express-partials');

	// ...
	app.set('view options', {defaultLayout: 'layout'});
	app.set('view engine', 'ejs');

	app.use(partials());
	app.use(log.logger);
	app.use(express.static(__dirname + '/static'));

	app.get('/', routes.index);
	app.get('/login', routes.login);

	// ...
	app.post('/login', routes.loginProcess);
	app.get('/chat', routes.chat);
	app.get('/error', function (req, res, next) {
		next(new Error('It\'s contrived...'));
	});

	// ...
	app.use(errorHandlers.error);
	app.use(errorHandlers.notFound);

	app.listen(3000);
	console.log("App server running on port 3000...");

}());

