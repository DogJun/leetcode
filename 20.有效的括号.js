/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (!s) return true
  const stack = []
  const validReg = /[\(\{\[]/
  const strArr = s.split('')
  for (let item of strArr) {
    if (validReg.test(item)) {
      stack.push(item)
    } else {
      switch (item) {
        case ')':
          if (stack.pop() !== '(') {
            return false
          }
          break;
        case '}':
          if (stack.pop() !== '{') {
            return false
          }
          break;
        case ']':
          if (stack.pop() !== '[') {
            return false
          }
          break;
      }
    }
  }
  return true
};
// @lc code=end

