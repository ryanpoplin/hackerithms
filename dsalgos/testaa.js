(function () {

	"use strict";

	// don't use different data types in an array in JS, even though you can...

	// don't declare/instantiate arrays like this: var newArr = new Array();

	var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

	console.log(daysOfWeek.length);

	for (var i = 0; i < daysOfWeek.length; i += 1) {

		console.log(daysOfWeek[i]);
	
	}

	// the Fibonacci sequence...

	var fibonacciSequence = function (sequenceLength) {

		var fibonacciArr = [0, 1, 1];

		for (var i = 3; i < sequenceLength; i += 1) {

			fibonacciArr[i] = fibonacciArr[i - 2] + fibonacciArr[i - 1];

		}

		console.log(fibonacciArr);

	};

	fibonacciSequence(24);

	// ...

}());