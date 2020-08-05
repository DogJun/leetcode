/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let numsMap1 = getNumsMap(nums1)
  let numsMap2 = getNumsMap(nums2)
  let result = []
  for (let num of numsMap1.keys()) {
    let count1 = numsMap1.get(num)
    let count2 = numsMap2.get(num)
    if (count2) {
      let min = Math.min(count1, count2)
      for (let i = 0; i < min; i++) {
        result.push(num)
      }
    }
  }
  return result
};
var getNumsMap = function (nums) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    let count = map.get(num)
    if (count) {
      map.set(num, count + 1) 
    } else {
      map.set(num, 1)
    }
  }
  return map
}
// @lc code=end

