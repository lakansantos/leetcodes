const maxProfit = (prices) => {
  // we cannot just get the min price in the array in this straight up through math.min without using loop.
  // what can we do is to compare the day 1 to all other days to get the minimum

  /**
   * To get the maximum profit
   * maximum profit = highest price day - minimum price
   * maximumProfit = Math.max() - minimumPrice
   */
  let _maxProfit = 0;

  let minimumPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    minimumPrice = Math.min(minimumPrice, prices[i]);

    // 0, 1-1 = 0 = 0
    // 0, 5- 1 = 4  = 4
    // 4, 3- 1 = 2 = 4
    // 4, 6-1 = 5 = 5
    // 5, 4-1 = 3 = 5
    _maxProfit = Math.max(_maxProfit, prices[i] - minimumPrice);
  }
  return _maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));

// console.log(maxProfit([7, 6, 4, 3, 1]));
