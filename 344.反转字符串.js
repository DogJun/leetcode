/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  const length = s.length
  let start = 0
  let end = length - 1
  while (start < end) {
    [s[start], s[end]] = [s[end], s[start]]
    start++
    end--
  }
};
// @lc code=end

