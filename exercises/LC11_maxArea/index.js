// Following code has:
// Time complexity: O(n) // Each number is visited twice
// Space complexity: O(1)

const maxArea = height => {
	let maxArea = 0;
	let left = 0;
	let right = height.length - 1;

	while (left < right) {
		const currentArea = Math.min(height[left], height[right]) * (right - left); // area = height * width
		maxArea = Math.max(currentArea, maxArea);

		if (height[left] < height[right]) left++;
		else right--;
	}

	return maxArea;
};

module.exports = maxArea;
