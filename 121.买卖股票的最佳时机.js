/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let min = prices[0];
  let max = 0;
  for (let i in prices) {
    i = Number(i)
    if (i === 0) continue;
    const price = prices[i]
    if (price - min > max) max = price - min
    if (price < min) min = price
  }
  return max
};
// @lc code=end

