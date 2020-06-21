/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if (!nums || nums.length < 3) return []
  let result = [], second, last
  nums.sort((a, b) => a - b)
  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue
    second = i + 1
    last = len - 1
    while (second < last) {
      const sum = nums[i] + nums[second] + nums[last]
      if (sum === 0) {
        result.push([nums[i], nums[second], nums[last]])
        while(second < last && nums[second] === nums[second + 1]) {
          second++
        }
        while(second < last && nums[last] === nums[last - 1]) {
          last--
        }
        second++
        last--
      } else if (sum < 0) {
        second++
      } else {
        last--
      }
    } 
  } 
  return result
};
// @lc code=end

