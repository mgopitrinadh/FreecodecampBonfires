/*
 * Repeat a given string (first argument) num times (second argument). Return
 * an empty string if num is not a positive number.
 *
 * Eg:
 * repeatStringNumTimes("Hello World", 3) = Hello WorldHello WorldHello World 
 */

function repeatStringNumTimes(inputString, num) {
	var repeatedString = "",
	errMsg = "ERROR: ";

	// Error handling: Invalid input
	if((typeof(inputString) !== "string") ||
		(typeof(num) !== "number")) {
		errMsg += "Invalid inputs";
		return errMsg;
	}

	// append the inputString to repeatedString till num is > 0
	while(num > 0) {
		repeatedString += inputString;
		num--;
	}
	return repeatedString;
}

// Test cases
console.log(repeatStringNumTimes("*", 3));
console.log(repeatStringNumTimes("abc", 3));
console.log(repeatStringNumTimes("abc", 4));
console.log(repeatStringNumTimes("*", 8));
console.log(repeatStringNumTimes("abc", -2));
console.log(repeatStringNumTimes("Hello World", 3));
console.log(repeatStringNumTimes(123, 1));
console.log(repeatStringNumTimes("abc", "123"));

