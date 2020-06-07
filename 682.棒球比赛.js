/*
 * @lc app=leetcode.cn id=682 lang=javascript
 *
 * [682] 棒球比赛
 */

// @lc code=start
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
  let result = []
  let pre1
  let pre2
  ops.forEach(item => {
    switch (item) {
      case '+':
        pre1 = result.pop()
        pre2 = result.pop()
        result.push(pre2, pre1, pre1 + pre2)
        break;
      case 'D':
        pre1 = result.pop()
        result.push(pre1, pre1 * 2)
        break;
      case 'C':
        result.length && result.pop()
        break;
      default:
        result.push(item * 1)
        break;
    }
  })
  return result.reduce((acc, curr) => (acc + curr))
};
// @lc code=end

