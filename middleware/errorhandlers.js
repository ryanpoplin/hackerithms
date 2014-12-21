(function () {

	"use strict";

	exports.notFound = function notFound (req, res, next) {
		res.send(404, 'You are a dumb fucking fool!!!');
	};

	exports.error = function error (err, req, res, next) {
		console.log(err);
		// 403 Forbidden too?
		res.send(500, 'Something fucked up...');
	};

}());