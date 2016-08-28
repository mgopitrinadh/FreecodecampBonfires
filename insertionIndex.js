/*
 * Return the lowest index at which a value (second argument) should be inserted
 * into an array (first argument) once it has been sorted. The returned value
 * should be a number.
 *
 * For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is
 * greater than 1 (index 0), but less than 2 (index 1).
 * 
 * Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array
 * has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2)
 * and greater than 5 (index 1). 
 *
 * Eg:
 * getInsertionIndex([40, 60], 50) = 1
 */

function getInsertionIndex(inputArr, insertNumber) {
	var index = 0,
		errMsg = "ERROR: ";

	// Error handling: Invalid input
	if(!Array.isArray(inputArr)) {
		errMsg += "Input is not an array";
		return errMsg;
	}

	// sort the numbers in ascending order
	inputArr.sort(function(num1, num2) {
		return num1 - num2;
	});

	// check for the first greater than or equal to the number to be inserted
	for(index = 0; index < inputArr.length; index++) {
		// gives the index
		if(insertNumber <= inputArr[index]) {
			// 'break' will break the current loop and moves to next line after
			// the loop
			break;
		}
	}

	return index;
}

// Test cases
console.log(getInsertionIndex([10, 20, 30, 40, 50], 35));
console.log(getInsertionIndex([10, 20, 30, 40, 50], 30));
console.log(getInsertionIndex([40, 60], 50));
console.log(getInsertionIndex([3, 10, 5], 3));
console.log(getInsertionIndex([5, 3, 20, 3], 5));
console.log(getInsertionIndex([2, 20, 10], 19));
console.log(getInsertionIndex([2, 5, 10], 15));
console.log(getInsertionIndex("abc", "1"));