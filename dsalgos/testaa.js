(function () {

	"use strict";

	var fibonacci = [];

	fibonacci[1] = 1;
	fibonacci[2] = 1;
	
	var i;
	for (i = 3; i < 6; i += 1) {
		fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];	
		console.log(fibonacci[i]);
	}

}());