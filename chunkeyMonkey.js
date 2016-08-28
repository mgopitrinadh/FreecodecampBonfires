/*
 * Write a function that splits an array (first argument) into groups the
 * length of size (second argument) and returns them as a two-dimensional array.
 *
 * Eg:
 * chunkArrInGroups(["a", "b", "c", "d"], 2) = [["a", "b"], ["c", "d"]]
 */

function chunkArrInGroups(inputArr, groupSize) {
	var groupedArr = [],
		errMsg = "ERROR: ";

	// Error handling: Invalid input
	if(!Array.isArray(inputArr)) {
		errMsg += "Input array is not an array";
		return errMsg;
	} else if(typeof(groupSize) !== "number") {
		errMsg += "Input groupSize is not a number";
		return errMsg;
	}

	// array.slice() method returns a copy of specified portion of array
	// into a new array object
	// 
	// here, slice the inputArr based on the given groupSize input
	for(var i = 0; i < inputArr.length; i += groupSize) {
		groupedArr.push(inputArr.slice(i, i + groupSize));
	}

	return groupedArr;
}

// Test cases
console.log(chunkArrInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrInGroups([0, 1, 2, 3, 4, 5], 3));
console.log(chunkArrInGroups([0, 1, 2, 3, 4, 5], 2));
console.log(chunkArrInGroups([0, 1, 2, 3, 4, 5], 4));
console.log(chunkArrInGroups([0, 1, 2, 3, 4, 5, 6], 3));
console.log(chunkArrInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));
console.log(chunkArrInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));
console.log(chunkArrInGroups(1, 2));
console.log(chunkArrInGroups("a, bc, d", 2));
console.log(chunkArrInGroups([1, 2, 3], "1"));