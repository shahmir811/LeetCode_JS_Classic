function maxProduct(nums) {
	let maxProduct = nums[0];

	for (let i = 1; i < nums.length; i++) {
		nums[i] = Math.max(nums[i], nums[i] * nums[i - 1]);
		maxProduct = Math.max(nums[i], maxProduct);
	}

	return maxProduct;
}

module.exports = maxProduct;
