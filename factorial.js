/*
 * If the integer is represented with the letter n,
 * a factorial is the product of all positive integers
 * less than or equal to n
 * 
 * Eg:
 * Factorial(5) = 5 * 4 * 3 * 2 * 1 = 120
 */
function findFactorial(input) {
	// factorial is initialised to 1 because
	// Factorial(0) & Factorial(1) are 1
	var	factorial = 1,
	// Log an error message in case of errors
		errMsg ="ERROR: ";

	// Error handling: Invalid input
	if(typeof(input) !== "number") {
		errMsg += "Input type is not a number";
		return errMsg;
	}
	// Error handling: Invalid input
	else if(input < 0) {
		errMsg += "No support for negative number factorial";
		return errMsg;
	}

	// find the product of positive integers that are between
	// 1 & input (inclusive)
	while(input > 1) {
		// product
		factorial *= input;
		// next smaller integer to input
		input--;
	}

	return factorial;
}


// Test cases
console.log(findFactorial(0));
console.log(findFactorial("Hello!"));
console.log(findFactorial(1));
console.log(findFactorial("   "));
console.log(findFactorial(5));
console.log(findFactorial(10));
