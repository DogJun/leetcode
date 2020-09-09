/*
 * @lc app=leetcode.cn id=557 lang=javascript
 *
 * [557] 反转字符串中的单词 III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  if (s.length === 0) return s
  const tempArr = s.split(' ')
  const res = []
  for (let i = 0; i < tempArr.length; i++) {
    res.push(tempArr[i].split('').reverse().join(''))
  }
  return res.join(' ')
};
// @lc code=end

