/*
 * One of the simplest and most widely known ciphers is a Caesar cipher,
 * also known as a shift cipher. In a shift cipher the meanings of the
 * letters are shifted by some set amount.
 * 
 * A common modern use is the ROT13 cipher, where the values of the letters
 * are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on
 */

function rot13(inputString) {
	var cipheredString = "",
		errMsg = "ERROR: ";

	// Error handling: Invalid input
	if(typeof(inputString) !== "string") {
		errMsg += "Input is not a string";
		return errMsg;
	}

	// iterate through the inputString
	for(var i = 0; i < inputString.length; i++) {
		// get char code of each character
		var code = inputString.charCodeAt(i);

		// if the char code is of 
		// - an non-alphabet, add it to ciphered string without any change
		// - is an alphabet & code + 13 is <= 90, add 13 to code to get
		// 		appropriate alphabet
		// - is an alphabet & code + 13 is > 90, subtract 13 from code to get
		// 		appropriate alphabet
		if((code < 65) || (code > 91)) {
			cipheredString += inputString[i];
		} else if(code < 78) {
			cipheredString += String.fromCharCode(code + 13);
		} else {
			cipheredString += String.fromCharCode(code - 13);
		}
	}

	return cipheredString;
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("SERR YBIR?"));
console.log(rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."));
console.log(rot13(123));