(function () {

	"use strict";

	var util = require('../middleware/utils');

	exports.index = function index (req, res) {
		res.render('index', {title: 'Index'});
	};

	exports.login = function login (req, res) {
		res.render('login', {title: 'Login'});
	};

	exports.loginProcess = function loginProcess (req, res) {
		var isAuth = util.auth(req.body.username, req.body.password, req.session);
		if (isAuth) {
			res.redirect('/chat');
		} else {
			res.redirect('/login');
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