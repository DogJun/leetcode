/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  const len = nums.length
  if (len === 3) {
    return getSum(nums)
  }
  let min = Infinity
  let res
  nums.sort((a, b) => a - b)
  for (let i = 0; i <= len - 3; i++) {
    let basic = nums[i]
    let left = i + 1
    let right = len - 1
    while (left < right) {
      let sum = getSum([basic, nums[left], nums[right]])
      let diff = Math.abs(target - sum)
      if (diff < min) {
        min = diff
        res = sum
      }
      if (sum < target) {
        left++
      } else if (sum > target) {
        right--
      } else {
        return sum
      }
    } 
  }
  return res
};
var getSum = (arr) => {
  return arr.reduce((acc, curr) => {
    return acc + curr
  }, 0)
}
// @lc code=end

