/*
 * A palindrome is a word or sentence that's 
 * spelled the same way both forward and backward,
 * ignoring punctuation, case, and spacing
 *
 * Eg:
 * isPalindrome("Eye") = true // 'pip' is a palindrome
 * isPalindrome("Hello") = false // 'hello' is not a palindrome
 */

function isPalindrome(inputString) {
	var refinedInputString = "",
		reversedString = "",
		errMsg = "ERROR: ";

	// Error handling: Invalid input
	if(typeof(inputString) !== "string") {
		errMsg += "Input is not a string";
		return errMsg;
	}
	// eliminate non-alphanumeric characters from the string using regular expression (RegExp)
	/* ^ is negation. [^A-Za-z0-9] implies it matches anything that is not in
	 * [A-Z] or [a-z] or [0-9]
	 * 'g' is needed for global search. RegExp now becomes "/[^A-Za-z0-9]/g"
	 * Once non-alphanumeric characters are removed, covert the string to lower case
	 * in order to match with reversed string
	 */
	refinedInputString = inputString.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
	// Refer to stringReverse.js
	reversedString = refinedInputString.split('').reverse().join('');

	/*
	 * Ternary operator i.e condition ? TRUE : FALSE
	 * As there are not many operations within if-else blocks, using ternary operator
	 * 
	 * Eg:
	 * if(input === 10) {
	 * 		return "Valid"; // true
	 * } else {
	 * 		return "Invalid" // false
	 * }
	 *
	 * Same can be written using ternary operator as below
	 * input === 10 ? "Valid" : "Invalid"
	 */
	
	return refinedInputString === reversedString ? true : false;
}

// Test cases
console.log(isPalindrome("_eYe"));
console.log(isPalindrome(123));
console.log(isPalindrome("race car"));
console.log(isPalindrome("not a palindrome"));
console.log(isPalindrome("A man, a plan, a canal. Panama"));
console.log(isPalindrome("never odd or even"));
console.log(isPalindrome("nope"));
console.log(isPalindrome("almostomla"));
console.log(isPalindrome("1 eye for  od 1 eye."));
console.log(isPalindrome("My age is 0, 0 si ega ym."));
console.log(isPalindrome("0_0 (: /-\ :) 0-0"));
console.log(isPalindrome("five|\_/|four"));