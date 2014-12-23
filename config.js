(function () {

	"use strict";

	var util = require('./middleware/utils');	

	var config = {
		port: 3000,
		// config...
		// secret: 'asdfjkl;',
		redisUrl: 'redis://localhost',
		routes: {
			login: '/login',
			logout: '/logout',
		}
	};

	module.exports = config;

}());