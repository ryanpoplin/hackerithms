(function () {

	"use strict";

	exports.notFound = function notFound (req, res, next) {
		res.send(404, 'Not Found...');
	};

	exports.error = function error (err, req, res, next) {
		console.log(err);
		res.send(500, 'Forbidden?...');
	};

}());