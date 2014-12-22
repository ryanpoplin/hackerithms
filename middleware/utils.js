(function () {

	"use strict";

	var config = require('../config');

	module.exports.templateRoutes = function templateRoutes (req, res, next) {
		res.locals.routes = config.routes;
		next();
	};

	module.exports.csrf = function csrf (req, res, next) {
		res.locals.token = req.csrfToken();
		next();
	};

	module.exports.authenticated = function authenticated (req, res, next) {
		res.locals.isAuthenticated = req.session.isAuthenticated;
		if (req.session.isAuthenticated) {
			res.locals.user = req.session.user;
		}
		next();
	};

	module.exports.requireAuthentication = function requireAuthentication (req, res, next) {
		if (req.session.isAuthenticated) {
			next();
		} else {
			res.redirect(config.routes.login);
		}
	};

	module.exports.auth = function auth (username, password, session) {
		var isAuth = username === 'Ryan Poplin';
		if (isAuth) {
			session.isAuthenticated = isAuth;
			session.user = {
				username: username
			};
		}
		return isAuth;
	};

	module.exports.logOut = function logOut (session) {
		session.isAuthenticated = false;
		delete session.user;
	};

	module.exports.cookieSecretKey = function cookieSecretKey () {
		var text = '';
    	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    	var i;
    	for (i = 0; i < 64; i += 1) {
        	text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
	};

}());

