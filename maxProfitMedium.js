const maxProfit = (prices) => {
  let _maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i + 1] - prices[i] >= 0) {
      _maxProfit += prices[i + 1] - prices[i];
    }
  }

  return _maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 7

// [7,1,5,3,6,4]
// 7 - 1  = 6
// 1 - 5 = -4
// 5 -3  = 2
// 3 -6  = -3
// 6 - 4

// 1, 6 = 6 - 1 = 5
// 1, 5 = 5- 1 = 4
// [5, 3, 6, 4] = 5, 6 = 1
// [3, 6] = 6-3 = 3
// 4 + 3 = 7
//
// 3,6 6-3 = 3
// [1,2,3,4,5] = 4
//
// 5 - 1 = 4
// 6 - 3 = 3
//
// 5 - 1  = 4
//
// 2- 1 = 1
// 3 - 2 = 1
// 4 - 3 = 1
//  5 - 4 = 1
// 4
