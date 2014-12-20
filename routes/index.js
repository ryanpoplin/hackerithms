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
		// Cookies...
		res.cookie('IndexCookie', 'This was set from Index');
		// res.clearCookie('IndexCookie');
		res.render('index', {title: 'Index', cookie: JSON.stringify(req.cookies), session: JSON.stringify(req.session), signedCookie: JSON.stringify(req.signedCookies)});
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