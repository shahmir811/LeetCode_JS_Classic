//Given a string s, find the longest palindromic substring in s
// --- Example
// longestPalindrome("cbbd") --> "bb"
// longestPalindrome("abba") --> "abba"
// longestPalindrome("a") --> "a"

const longestPalindrome = s => {
	let startIndex = 0;
	let maxLength = 1;

	const expandAroundMiddle = (left, right) => {
		while (left >= 0 && right < s.length && s[left] === s[right]) {
			const currentPalLength = right - left + 1;
			if (currentPalLength > maxLength) {
				maxLength = currentPalLength;
				startIndex = left;
			}
			left--;
			right++;
		}
	};

	for (let i = 0; i < s.length; i++) {
		expandAroundMiddle(i - 1, i + 1); // s.length is odd
		expandAroundMiddle(i, i + 1); // s.length is even
	}

	return s.slice(startIndex, startIndex + maxLength);
};

module.exports = longestPalindrome;
