/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  // 用于保存每个目标总额对应的最小硬币总数
  const f = []
  // 已知情况
  f[0] = 0
  for (let i = 1; i <= amount; i++) {
    // 求最小值，默认给无穷大
    f[i] = Infinity
    // 循环遍历每个可用硬币的面额
    for (let j = 0; j < coins.length; j++) {
      if (i >= coins[j]) {
        f[i] = Math.min(f[i], f[i - coins[j]] + 1)
      }
    }
  }
  if (f[amount] === Infinity) {
    return -1
  }
  return f[amount]
};
// @lc code=end

