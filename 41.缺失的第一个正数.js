/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  let arr = nums.filter(item => item > 0)
  if (arr.length === 0) return 1
  for(let i = 0, len = arr.length; i < len; i++) {
    min = arr[i]
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < min) {
        let c = min
        min = arr[j]
        arr[j] = c
      }
    }
    arr[i] = min
    if (i > 0) {
      if (arr[i] - arr[i - 1] > 1) {
        return arr[i-1] + 1
      }
    } else {
      if (arr[0] !== 1) {
        return 1
      }
    }
  }
  return arr.pop() + 1
};
// @lc code=end

