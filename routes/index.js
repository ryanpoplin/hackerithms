(function () {

	"use strict";

	exports.index = function index (req, res) {
		res.render('index', {title: 'Index'});
	};

	exports.login = function login (req, res) {
		res.render('login', {title: 'Login'});
	};

	exports.loginProcess = function loginProcess (req, res) {
		console.log(req.body);
		res.send(req.body.username + ' ' + req.body.password);
	};

	exports.chat = function chat (req, res) {
		res.render('chat', {title: 'Chat'});
	};

}());