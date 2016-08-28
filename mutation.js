/*
 * Return true if the string in the first element of the array contains all of
 * the letters of the string in the second element of the array.
 *
 * Eg:
 * mutation(["hello", "hey"]) = false
 * mutation(["hello", "lo"]) = true
 */

function mutation(inputArr) {
	var firstString = "",
		secondString = "",
		firstStringLength = 0,
		secondStringLength = 0,
		errMsg = "ERROR: ";

	// Error handling: Invalid input
	// - inputArr should be an array
	// - No. of array elements == 2
	// - Array elements must be strings
	if(!Array.isArray(inputArr)) {
		errMsg += "Input array is not an array";
		return errMsg;
	} else if(inputArr.length !== 2) {
		errMsg += "Invalid no. of input array elements";
		return errMsg;
	} else if((typeof(inputArr[0]) !== "string") ||
		(typeof(inputArr[1]) !== "string")) {
		errMsg += "Array elements should be string";
		return errMsg;
	}
	// converting both array elements to lower case
	firstString = inputArr[0].toLowerCase();
	secondString = inputArr[1].toLowerCase();
	// get string lengths
	firstStringLength = firstString.length;
	secondStringLength = secondString.length;

	// Error handling: Invalid second string
	// - secondString should not be empty
	// - secondString should not be longer than firstString
	if(secondStringLength === 0) {
		errMsg += "Second string cannot be empty";
		return errMsg;
	}
	else if(secondStringLength > firstStringLength) {
		errMsg += "Second string cannot be longer than first";
		return errMsg;
	}

	// look up for each secondString character in firstString
	// indexOf() method returns the index of first occurence of search value,
	// returns -1 if search value is not found
	for (var i = 0; i < secondStringLength; i++) {
		// secondString character is not present in firstString, mutation
		// failed, return false
		if(firstString.indexOf(secondString[i]) === -1) {
			return false;
		}
	}

	// if all secondString character are found in firstString, only then the
	// function reaches here. mutation success, return true
	return true;
}

// Test cases
console.log(mutation(["hello", "hey"]));
console.log(mutation(["hello", "Hello"]));
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
console.log(mutation(["Mary", "Army"]));
console.log(mutation(["Mary", "Aarmy"]));
console.log(mutation(["Alien", "line"]));
console.log(mutation(["floor", "for"]));
console.log(mutation(["hello", "neo"]));
console.log(mutation(["voodoo", "no"]));
console.log(mutation(["voodoo", "no", "hi"]));
console.log(mutation(123));
console.log(mutation("abc"));
console.log(mutation(["voodoo", "noooooooooooo"]));
console.log(mutation(["voodoo", ""]));
console.log(mutation(["voodoo", 123]));