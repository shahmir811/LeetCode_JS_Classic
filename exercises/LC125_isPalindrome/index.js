// Following code has:
// Time complexity: O(n)
// Space complexity: O(1) // left and right pointer takes up constant space

function isPalindrome(s) {
	let str = s.toLowerCase().replace(/[\W_]/g, ''); // remove special characters and spaces

	let left = 0;
	let right = str.length - 1;

	while (left < right) {
		let leftChar = str[left];
		let rightChar = str[right];

		if (leftChar !== rightChar) return false;

		left++;
		right--;
	}

	return true;
}

module.exports = isPalindrome;
