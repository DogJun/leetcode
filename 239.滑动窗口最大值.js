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
// var maxSlidingWindow = function(nums, k) {
//   const len = nums.length
//   const res = []
//   let left = 0
//   let right = k - 1
//   while (right < len) {
//     res.push(calMax(nums, left, right))
//     left++
//     right++
//   }
//   return res
// };
// function calMax (arr, left, right) {
//   let max = Number.MIN_SAFE_INTEGER
//   for (let i = left; i <= right; i++) {
//     if (arr[i] > max) {
//       max = arr[i]
//     }
//   }
//   return max
// }
// 双端队列
var maxSlidingWindow = function(nums, k) {
  const res = []
  const deque = []
  for (let i = 0; i < nums.length; i++) {
    // 当队尾元素小与当前元素时
    while (nums[deque[deque.length - 1]] < nums[i] && deque.length) {
      // 队尾元素不断出队，直到队尾元素大于当前元素
      deque.pop()
    }
    // 入列索引
    deque.push(i)
    // 当队头元素的索引已经被排除在滑动窗口之外
    while (deque.length && deque[0] <= i - k) {
      deque.shift()
    }
    // 判断滑动窗口的状态，只有在被遍历元素大于k的时候才更新结果数组
    if (i >= k - 1) {
      res.push(nums[deque[0]])
    }
  }
  return res
};
// @lc code=end

