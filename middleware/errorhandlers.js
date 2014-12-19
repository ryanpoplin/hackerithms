(function () {

	"use strict";

	exports.notFound = function notFound (req, res, next) {
		res.send(404, 'You are a dumb fucking fool!!!');
	};

}());