// Following code has:
// Time complexity: O(n)
// Space complexity: O(1) // Our hashMap (objs) has maximum of 26 characters

const isAnagram = (s, t) => {
	if (s.length !== t.length) return false;

	const objs = {};

	for (const char of s) {
		objs[char] = ++objs[char] || 1;
	}

	for (const char of t) {
		if (!objs[char]) return false;
		else {
			objs[char]--;
		}
	}

	return true;
};

module.exports = isAnagram;
