(function () {

	"use strict";

	// ...
	// module.exports.index = index;
	// module.exports.login = login;
	// module.exports.loginProcess = loginProcess;
	// module.exports.chat = chat;

	// already setup to use the views folder...
	exports.index = function index (req, res) {
		// res.send('Index');
		res.render('index', {title: 'Index'});
	};

	exports.login = function login (req, res) {
		// res.send('Login');
		res.render('login', {title: 'Login'});
	};

	// ...
	exports.loginProcess = function loginProcess (req, res) {
		res.redirect('/');
	};

	exports.chat = function chat (req, res) {
		// res.send('Chat');
		res.render('chat', {title: 'Chat'});
	};

}());