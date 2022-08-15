const rob = nums => {
	if (nums.length === 0) return 0;
	if (nums.length === 1) return nums[0];
	if (nums.length === 2) return Math.max(nums[0], nums[1]);

	let maxMoney = [nums[0], Math.max(nums[0], nums[1])];
	for (let i = 2; i < nums.length; i++) {
		const max = Math.max(nums[i] + maxMoney[i - 2], maxMoney[i - 1]);
		maxMoney.push(max);
	}

	return maxMoney.pop();
};

module.exports = rob;
