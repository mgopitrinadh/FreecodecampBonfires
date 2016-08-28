/*
 * Remove all falsy values from an array
 *
 * Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
 * 
 * Eg:
 * falsyBouncer([7, "ate", "", false, 9]) = [7, "ate", 9]
 */

function falsyBouncer(inputArr) {
	var filteredArr = [],
		errMsg = "ERROR: "

	// Error handling: Invalid input
	if(!Array.isArray(inputArr)) {
		errMsg += "Input array is not an array";
		return errMsg;
	}

	// filter() creates a new array with all elements that pass the test
	// implemented by the provided function
	filteredArr = inputArr.filter(function(value) {
		// Boolean object is an object wrapper for a boolean value
		return Boolean(value);
	});

	return filteredArr;
}

// Test cases
console.log(falsyBouncer([7, "ate", "", false, 9]));
console.log(falsyBouncer(["a", "b", "c"]));
console.log(falsyBouncer([false, null, 0, NaN, undefined, ""]));
console.log(falsyBouncer([1, null, NaN, 2, undefined]))