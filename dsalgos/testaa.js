(function () {

	"use strict"

	// don't use different data types in an array in JS, even though you can...

	// don't declare/instantiate arrays like this: var newArr = new Array();

	var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

	console.log(daysOfWeek.length);

	for (var i = 0; i < daysOfWeek.length; i += 1) {

		console.log(daysOfWeek[i]);
	
	}

	// var fibo = function () {
	// 	var fibonacci = [0, 1, 1], i;
	// 	for (i = 3; i < 6; i += 1) {
	// 		fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];	
	// 		console.log(fibonacci[i]);
	// 	}
	// };

	// fibo();



}());