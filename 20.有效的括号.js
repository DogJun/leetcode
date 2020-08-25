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
  // if (!s) return true
  // if (s.length % 2 !== 0) return false
  // const stack = []
  // const validReg = /[\(\{\[]/
  // const strArr = s.split('')
  // for (let item of strArr) {
  //   if (validReg.test(item)) {
  //     stack.push(item)
  //   } else {
  //     switch (item) {
  //       case ')':
  //         if (stack.pop() !== '(') {
  //           return false
  //         }
  //         break;
  //       case '}':
  //         if (stack.pop() !== '{') {
  //           return false
  //         }
  //         break;
  //       case ']':
  //         if (stack.pop() !== '[') {
  //           return false
  //         }
  //         break;
  //     }
  //   }
  // }
  // if (stack.length) {
  //   return false
  // } 
  // return true
  const map = {
    '{': '}',
    '[': ']',
    '(': ')'
  }
  let stack = []
  for (let i = 0; i < s.length; i++) {
    const item = s[i]
    if (map[item]) {
      stack.push(item)
    } else if (item !== map[stack.pop()]) {
      return false
    }
  }
  return stack.length === 0
};
// @lc code=end

