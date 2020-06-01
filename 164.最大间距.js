/*
 * @lc app=leetcode.cn id=164 lang=javascript
 *
 * [164] 最大间距
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
  if (nums.length <= 1) return 0
  if (nums.length === 2) {
    return nums[1] - nums[0] > 0 ? nums[1] - nums[0] : nums[0] - nums[1]
  }
  let gap = 0
  for (let i = nums.length - 1, temp; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j+1]) {
        temp = nums[j]
        nums[j] = nums[j+1]
        nums[j+1] = temp 
      }
    }
    if (i < nums.length - 1) {
      let tempGap = nums[i + 1] - nums[i]
      if (tempGap > gap) {
        gap = tempGap
      }
    }
  }
  return Math.max(gap, nums[1] - nums[0]) 
};
// @lc code=end

