/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  const len = T.length
  const stack = []
  const res = new Array(len).fill(0)
  for (let i = 0; i < len; i++) {
    // 若栈不为0且打破递减趋势
    while (stack.length && T[i] > T[stack[stack.length - 1]]) {
      let top = stack.pop()
      res[top] = i - top
    }
    // 存入索引值
    stack.push(i)
  }
  return res
};
// @lc code=end

