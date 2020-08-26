/*
 * @lc app=leetcode.cn id=905 lang=javascript
 *
 * [905] 按奇偶排序数组
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
  // let oddArr = []
  // let evenArr = []
  // A.forEach((item) => {
  //   if (item % 2 === 1) {
  //     oddArr.push(item)
  //   } else {
  //     evenArr.push(item)
  //   }
  // })
  // return evenArr.concat(oddArr)
  // 双指针
  let start = 0
  let end = A.length - 1
  while (start < end) {
    while (A[start] % 2 === 0) {
      start++
    }
    while (A[end] % 2 === 1) {
      end--
    }
    if (start < end) {
      [A[start], A[end]] = [A[end], A[start]]
    }
  }
  return A
};
// @lc code=end

