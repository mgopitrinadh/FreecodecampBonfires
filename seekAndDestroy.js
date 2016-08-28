/*
 * You will be provided with an initial array (the first argument in the
 * destroyer function), followed by one or more arguments. Remove all elements
 * from the initial array that are of the same value as these arguments.
 *
 * Eg:
 * destroyer([1, 2, 3, 1, 2, 3], 2, 3) = [1, 1]
 */

function destroyer(inputArr) {
	var filteredArr = [],
		arr = [],
		args = Array.prototype.slice.call(arguments);
		errMsg = "ERROR: ";

	// Error handling: Invalid input
	if(args.length === 0) {
		errMsg += "No input shared";
		return errMsg;
	}

	// get the array to be filtered
	// as per problem description, args[0] contains the array to be filtered
	// shift() method removes & returns the first element from the array
	arr = args.shift();

	if(!Array.isArray(arr)) {
		errMsg += "First input argument is not an array";
		return errMsg;
	}

	// remove the matching elements from arr
	filteredArr = arr.filter(function(val) {
		// if the arr element is not present in the list of arguments shared,
		// then remove it from the add it to the filtered array
		return args.indexOf(val) === -1;
	});

	return filteredArr;
}

// Test cases
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));
console.log(destroyer([2, 3, 2, 3], 2, 3));
console.log(destroyer(["tree", "hamburger", 53], "tree", 53));
console.log(destroyer());
console.log(destroyer(1, 2, 3));