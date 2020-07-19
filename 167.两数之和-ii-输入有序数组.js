/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  const length = numbers.length
  let start = 0
  let end = length - 1
  let sum = 0
  while (start < end) {
    sum = numbers[start] + numbers[end]
    if (sum === target) {
      return [start + 1, end + 1]
    } else if (sum < target) {
      start++
    } else {
      end--
    }
  }
  return []
};
// @lc code=end

