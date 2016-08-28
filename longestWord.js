/*
 * Return the length of the longest word in the provided sentence
 * 
 * Eg:
 * findLongestWord("Hi There") = 5 // There
 */
function findLongestWord(inputString) {
	var words = [],
		longestLength = 0,
		errMsg = "ERROR: ";

	// Error handling: Invalid input
	if(typeof(inputString) !== "string") {
		errMsg += "Input is not a string";
		return errMsg;
	}

	// split the input string into an array of words
	words = inputString.split(' ');

	// for each element in the array, find the element length and get the largest
	// Here, forEach (similar to 'for' loop) will pick each element in "words" array
	// and pass it to the function as 'word' (argument). forEach will run through
	// the complete array elements from start to end
	words.forEach(function(word) {
		// current word length > than previous word length, implies
		// current word is longest and thus longest length is update
		if(word.length > longestLength) {
			longestLength = word.length;
		}
	});

	return longestLength;
}

// Test cases
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord());
console.log(findLongestWord("May the force be with you"));
console.log(findLongestWord("Google do a barrel roll"));
console.log(findLongestWord("What is the average airspeed velocity of an unladen swallow"));
console.log(findLongestWord("What if we try a super-long word such as otorhinolaryngology"));
