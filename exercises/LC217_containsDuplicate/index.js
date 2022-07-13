// Following code has:
// Time complexity: O(n)
// Space complexity: O(n) // Number of key/value pairs in hashObj is equal to number of unique values in an array

const containsDuplicate = nums => {
	const hashObj = {};

	for (const element of nums) {
		if (hashObj[element]) {
			return true;
		}

		hashObj[element] = true;
	}
	return false;
};

module.exports = containsDuplicate;
