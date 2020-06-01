/*
 * @lc app=leetcode.cn id=905 lang=javascript
 *
 * [905] 按奇偶排序数组
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
  let oddArr = []
  let evenArr = []
  A.forEach((item) => {
    if (item % 2 === 1) {
      oddArr.push(item)
    } else {
      evenArr.push(item)
    }
  })
  return evenArr.concat(oddArr)
};
// @lc code=end

