/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let left = 0
  let right = 0
  let max = 0
  let map = {}
  while (right < s.length) {
    if (!map[s[right]]) {
      map[s[right]] = 1 
      right++
    } else {
      delete map[s[left]]
      left++
    }
    max = Math.max(max, right - left)
  }
  return max
};
// @lc code=end

