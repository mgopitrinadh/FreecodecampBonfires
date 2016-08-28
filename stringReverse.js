/*
 * Reverse the provided string
 *
 * Eg:
 * stringReverse("Hello") = "olleH"
 */

function stringReverse(inputString) {
	var reversedString = "",
		errMsg = "ERROR: "

	// Error handling: Invalid input
	if(typeof(inputString) !== "string") {
		errMsg += "Input is not a string";
		return errMsg;
	}
	// split the input string into individual character array
	reversedString = inputString.split('');
	// reverse character array elements
	reversedString.reverse();
	// join the array elements into a string and assign it to variable
	reversedString = reversedString.join('');

	return reversedString;
}

// Test cases
console.log(stringReverse("Hi there! Welcome to Javascript - Bonfires are fun"));
console.log(stringReverse(123));
console.log(stringReverse("     "));
console.log(stringReverse("Spaces are still strings!"));
