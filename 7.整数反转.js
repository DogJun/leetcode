/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let num = Number(Math.abs(x).toString().split('').reverse().join(''))
  if (x >= 0) {
    return num > Math.pow(2, 31) + 1 ? 0 : num
  } else {
    return num > Math.pow(2, 31) ? 0 : -num
  }
};
// @lc code=end

