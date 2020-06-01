/*
 * @lc app=leetcode.cn id=914 lang=javascript
 *
 * [914] 卡牌分组
 */

// @lc code=start
/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
  function gcd (num1, num2) {
    return num2 === 0 ? num1 : gcd(num2, num1 % num2)
  }
  let timeMap = new Map()
  deck.forEach(item => {
    timeMap.set(item, timeMap.has(item) ? timeMap.get(item) + 1 : 1)
  })
  let arr = [...timeMap.values()]
  let g = arr[0]
  arr.forEach(item => {
    g = gcd(g, item)
  })
  return g >= 2
};
// @lc code=end

