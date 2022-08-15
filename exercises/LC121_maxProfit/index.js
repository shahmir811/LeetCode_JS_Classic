// Following code has:
// Time complexity: O(n)
// Space complexity: O(1)

const maxProfit = prices => {
	let maxProfit = 0;
	let cheapestPrice = prices[0];

	for (let i = 0; i < prices.length; i++) {
		const currentPrice = prices[i];

		if (currentPrice < cheapestPrice) cheapestPrice = currentPrice;

		const profit = currentPrice - cheapestPrice;
		maxProfit = Math.max(profit, maxProfit);
	}

	return maxProfit;
};

module.exports = maxProfit;
