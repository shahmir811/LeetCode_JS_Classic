// Given an array of integers, return an array of indices of the two numbers
// that add up to the target.
// You may assume that each input would have exactly one solution, and
// you may not use the same element twice.
// --- Examples
// twoSum([2,7,11,15], 9) --> [0,1]
// twoSum([3,5,4], 9) --> [1,2]

// Following code has:
// Time complexity: O(n)
// Space complexity: O(n)

const twoSum = (arr, target) => {
	const numsVisited = {};
	const result = [];

	for (let i = 0; i < arr.length; i++) {
		const num = arr[i];
		const complement = target - num;

		if (numsVisited[complement] !== undefined) {
			result.push(i);
			result.push(numsVisited[complement]);
		}

		numsVisited[num] = i;
	}

	return result;
};

module.exports = twoSum;
