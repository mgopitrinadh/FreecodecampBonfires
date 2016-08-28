/*
 * Truncate a string (first argument) if it is longer than the given maximum
 * string length (second argument). Return the truncated string with
 * a ... ending.
 *
 * Note that inserting the three dots to the end will add to the string length.
 *
 * However, if the given maximum string length num is less than or equal to 3,
 * then the addition of the three dots does not add to the string length in
 * determining the truncated string
 * 
 * Eg:
 * truncateString("Hello World!", 8) = Hello...
 * truncateString("Hi There!", 2) = Hi...
 */

function truncateString(inputString, maxLength) {
	var truncatedString = "",
		dotString = "...",
		truncateStringLength = 0,
		errMsg = "ERROR: ";

	// Error handling: Invalid inputs
	if((typeof(inputString) !== "string") ||
		(typeof(maxLength) !== "number")) {
		errMsg += "Invalid inputs";
		return errMsg;
	} else if(maxLength <= 0) {
		errMsg += "Truncate length input should be greater than 1";
		return errMsg;
	}

	// if maxLength <= 3, dotString length is not added to the truncatedString
	// i.e. truncateString("Hi There!", 2) = Hi...
	// 		here, truncatedString length = 5 (2 + 3 dots)
	// 
	// else, dotString length is added to the truncatedString
	// i.e. truncateString("Hello World!", 8) = Hello...
	// 		here, truncatedString length = 8 (5 + 3 dots)
	if(maxLength <= 3) {
		truncateStringLength = maxLength;
	} else {
		truncateStringLength = maxLength - dotString.length;
	}
	// get the sub-string of inputString from index 0 to truncateStringLength
	truncatedString = inputString.substring(0, truncateStringLength);
	// append dots to truncatedString
	truncatedString += dotString;

	return truncatedString;
}

// Test cases
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11));
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 14));
console.log(truncateString("A-tisket a-tasket A green and yellow basket",
	"A-tisket a-tasket A green and yellow basket".length));
console.log(truncateString("A-", 1));
console.log(truncateString("Absolutely Longer", 2));
console.log(truncateString(123, 1));
console.log(truncateString("A-", "123"));
console.log(truncateString("A-", 0));