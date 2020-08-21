/*
 * @lc app=leetcode.cn id=1047 lang=javascript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
  let stack = []
  for (let i = 0; i < S.length; i++) {
    const item = S[i]
    if (stack.length && stack[stack.length - 1] === item) {
      stack.pop()
    } else {
      stack.push(item)
    }
  }
  return stack.join('')
};
// @lc code=end

