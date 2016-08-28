/*
 * Check if a string (first argument, str) ends with the given
 * target string (second argument, target).
 *
 * Eg:
 * confirmEnding("Hello World", "rld") = true
 * confirmEnding("Hello World", "g") = false
 */

function confirmEnding(inputString, endPattern) {
	var inputStringLength = 0,
		endPatternLength = 0,
		subString = "",
		errMsg = "ERROR: ";

		// Error handling: Invalid inputs
	if((typeof(inputString) !== "string") ||
		(typeof(endPattern) !== "string")) {
		errMsg += "Invalid inputString or endPattern";
		return errMsg;
	}
	inputStringLength = inputString.length;
	endPatternLength = endPattern.length;

	// endPattern should be a subset of inputString, so
	// endPatternLength should be less than inputStringLength
	// also, endPattern string cannot be empty
	if(endPatternLength > inputStringLength) {
		errMsg += "endPattern string cannot be longer than inputString";
		return errMsg;
	} else if(endPatternLength === 0) {
		errMsg += "endPattern cannot be empty string";
		return errMsg;
	}

	// get the substring from inputString. start index for substring can be derived as
	// inputStringLength - endPatternLength.
	// substring() method gives the string from start index till end
	subString = inputString.substring((inputStringLength - endPatternLength));

	// ternary operator to check string validation & return true / false
	// 'if' check can be used too
	return subString === endPattern ? true : false;
}

// Test cases
console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Connor", "n"));
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));
console.log(confirmEnding("He has to give me a new name", "name"));
console.log(confirmEnding("Open sesame", "same"));
console.log(confirmEnding("Open sesame", "pen"));
console.log(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"));
console.log(confirmEnding());
console.log(confirmEnding(123, "hi"));
console.log(confirmEnding("hi", "hello world"));
console.log(confirmEnding("hello", "   "));
console.log(confirmEnding("hi", ""));