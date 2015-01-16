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

	fibonacciSequence(6);

	// adding and removing elements form arrays...

	var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

	// our 11th element, etc...
	numbers[numbers.length] = 10;

	numbers.push(11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24);

	console.log(numbers);

    // here's a good point to remember about the 0th indexing...

    console.log(numbers.length);

    console.log(numbers.length - 1);

	// add new elements to the beginning of the array...

    for (var i = numbers.length; i >= 0; i -= 1) {

        // numbers[i] === numbers[25], and in JS you can dynamically do this...
        // not in compiled languages usually...

        numbers[i] = numbers[i - 1];

    }

    numbers[0] = -1;

    console.log(numbers);

    numbers.unshift(-2, -3, -4, -5, -6);

    numbers.pop();

    console.log(numbers);

    

}());