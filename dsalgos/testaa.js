(function () {

	"use strict"

	var fibo = function () {
		var fibonacci = [0, 1, 1], i;
		for (i = 3; i < 6; i += 1) {
			fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];	
			console.log(fibonacci[i]);
		}
	};			

}());