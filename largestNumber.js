/*
 * Return an array consisting of the largest number 
 * from each provided sub-array.
 *
 * Eg:
 * findLargestNumInEachSubArr([[3, 1], [5], [44, 26, 58]]) = [3, 5, 58]
 */

function findLargestNumInEachSubArr(inputArr) {
    var largestNumbersArr = [],
    	subArr = 0,
        largestNumber = 0,
        errMsg = "ERROR: ";

    // Error handling: Invalid input
    if (!Array.isArray(inputArr)) {
        errMsg += "Input is not an array";
        return errMsg;
    }

    // traverse each array element of inputArr
    for(var i = 0; i < inputArr.length; i++) {
    	subArr = inputArr[i];

        if (!Array.isArray(subArr)) {
        	// Error handling: Invalid input
            errMsg += "Sub-element is not an array & not a number"; // for logging purporse
            // continue - jumps to next iteration of the loop. i.e.
            // no statements after 'continue' are executed for this iteration in the loop
            // here, below lines are not executed in this iteration
            continue;
        }
    	// assume, first element is the largest number
    	// update as the subArr is traversed
        largestNumber = subArr[0];

        subArr.forEach(function(num) {
            if (num > largestNumber) {
                largestNumber = num;
            }
        });
        // by here, the valid subArr elements are traversed and largestNumber is identified
        // push this largestNumber to the output array, largestNumbersArr
        largestNumbersArr.push(largestNumber);
    }

    return largestNumbersArr;
}

// Test cases
console.log(findLargestNumInEachSubArr([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(findLargestNumInEachSubArr([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));
console.log(findLargestNumInEachSubArr("Hello"));
console.log(findLargestNumInEachSubArr([[1, 2, 3, 4, 5], "abc", [8, 9]]));
console.log(findLargestNumInEachSubArr(123));

