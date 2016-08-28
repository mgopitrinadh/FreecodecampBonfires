/*
 * Return the remaining elements of an array after chopping off n elements from
 * the head.
 * 
 * The head means the beginning of the array, or the zeroth index.
 *
 * Eg:
 * slasherFlick([1, 2, 3], 2) = [3]
 */

function slasherFlick(inputArr, slasherSize) {
	var errMsg = "ERROR: "

	// Error handling: Invalid input
	if(!Array.isArray(inputArr)) {
		errMsg += "Input array is not an array";
		return errMsg;
	} else if(typeof(slasherSize) !== "number") {
		errMsg += "Input slasherSize is not a number";
		return errMsg;
	}
	// splice() method changes the array by removing existing and / or
	// adding new elements
	inputArr.splice(0, slasherSize);

	return inputArr;
}

// Test cases
console.log(slasherFlick([1, 2, 3], 2));
console.log(slasherFlick([1, 2, 3], 0));
console.log(slasherFlick([1, 2, 3], 9));
console.log(slasherFlick(["burgers", "fries", "shake"], 1));
console.log(slasherFlick([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5));
console.log(slasherFlick());