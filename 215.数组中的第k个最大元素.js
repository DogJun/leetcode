/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  let len = nums.length
  for(let i = len - 1, temp; i > len - 1 - k; i--) {
    for (let j = 0; j < i; j++) {
      temp = nums[j]
      if (nums[j] > nums[j + 1]) {
        nums[j] = nums[j + 1]
        nums[j + 1] = temp
      }
    }
  }
  return nums[len - k]
};
// @lc code=end

