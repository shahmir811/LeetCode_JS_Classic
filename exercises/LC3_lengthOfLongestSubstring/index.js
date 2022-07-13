// Given a string, return the length of the longest substring without
// repeating characters.
// --- Example
// lengthOfLongestSubstring("abcabcbb") --> 3 since length of "abc"
// lengthOfLongestSubstring("bbbbb") --> 1 since length of "b"

// Following code has:
// Time complexity: 0(n)
// Space complexity: O(min(m, n))

const lengthOfLongestSubstring = s => {
	let max = 0;
	let startingWindow = 0; // start of sliding window
	let hasMap = {};

	for (let end = 0; end < s.length; end++) {
		let char = s[end];

		if (hasMap[char] !== undefined && hasMap[char] >= startingWindow) {
			// Found duplicate
			startingWindow = hasMap[char] + 1;
		}

		hasMap[char] = end;
		max = Math.max(max, end - startingWindow + 1);
	}

	return max;
};

module.exports = lengthOfLongestSubstring;
