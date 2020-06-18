/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//     for(let i = 0, len = nums.length; i < len; i++) {
//       for (let j = i + 1; j < len; j++) {
//         if (nums[i] + nums[j] === target) {
//           return [i, j]
//         }
//       }
//     }
//     return []
// };
// 可以用一层循环，时间复杂度为O(n)
var twoSum = function(nums, target) {
  const map = new Map()
  for (let i = 0, len = nums.length; i < len; i++) {
    const k = target - nums[i]
    if (map.has(k)) {
      return [map.get(k), i]
    }
    map.set(nums[i], i)
  }
  return []
};
// @lc code=end

