// Following code has:
// Time complexity: O(n k log k) // n is the number of strings and k is the length of the strings
// Space complexity: O(nk) // Data stored in grouped hashMap/hashTable

const groupAnagrams = strs => {
	let grouped = {};

	for (let i = 0; i < strs.length; i++) {
		const word = strs[i];
		const key = word.split('').sort().join('');

		if (!grouped[key]) grouped[key] = [];

		grouped[key].push(word);
	}

	return Object.values(grouped);
};

module.exports = groupAnagrams;
