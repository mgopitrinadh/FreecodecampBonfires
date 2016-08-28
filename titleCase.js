/*
 * Return the provided string with the first letter of
 * each word capitalized. Make sure the rest of the word
 * is in lower case.
 *
 * Eg:
 * getTitleCase("heLLo woRLd!") = "Hello World!"
 */

function getTitleCase(inputString) {
	var words = [],
		errMsg = "ERROR: ";

	if(typeof(inputString) !== "string") {
		errMsg += "Input is not a string";
		return errMsg;
	}

	// split the input string into an array of words
	words = inputString.split(' ');

	// for variation, unlike in longestWord.js, using 'for' loop
	for(var i = 0; i < words.length; i++) {
		// Changing the first character of every word to upper case
		// Adding the upper case character to rest of the word i.e, from index 1 using substring() method
		// Changing the rest of the string (from index 1, to end) to lower case
		words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1).toLowerCase();
	}

	// join the array of words to form the sentence
	return words.join(' ');
}

// Test cases
console.log(getTitleCase(123));
console.log(getTitleCase("I'm a little tea pot"));
console.log(getTitleCase("sHoRt AnD sToUt"));
console.log(getTitleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));