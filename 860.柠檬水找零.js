/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  let hand = []
  while (bills.length) {
    let price = bills.shift()
    if (price === 5) {
      hand.push(price)
    } else {
      // 找零钱
      let change = price - 5
      hand.sort((a, b) => b - a)
      for (let j = 0; j < hand.length; j++) {
        if (hand[j] <= change) {
          change -= hand[j]
          hand.splice(j, 1)
          j--
        }
        if (change === 0) {
          break
        }
      }
      if (change !== 0) {
        return false
      } else {
        hand.push(price)
      }
    }
  }
  return true
};
// @lc code=end

