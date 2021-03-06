(function () {

	"use strict";

	var util = require('../middleware/utils');
	var config = require('../config');

	exports.index = function index (req, res) {
		res.render('index', {title: 'Index'});
	};

	exports.login = function login (req, res) {
		res.render('login', {title: 'Login', message: req.flash('error')});
	};

	exports.loginProcess = function loginProcess (req, res) {
		var isAuth = util.auth(req.body.username, req.body.password, req.session);
		if (isAuth) {
			res.redirect('/chat');
		} else {
			req.flash('error', 'Wrong Username or Password. Please try again...');
			res.redirect(config.routes.login);
		}
	};

	exports.chat = function chat (req, res) {
		res.render('chat', {title: 'Chat'});
	};

	exports.logOut = function logOut (req, res) {
		util.logOut(req.session);
		res.redirect('/');
	};

}());