/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  const len = nums.length
  const res = []
  let left = 0
  let right = k - 1
  while (right < len) {
    res.push(calMax(nums, left, right))
    left++
    right++
  }
  return res
};
function calMax (arr, left, right) {
  let max = Number.MIN_SAFE_INTEGER
  for (let i = left; i <= right; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }
  return max
}
// @lc code=end

