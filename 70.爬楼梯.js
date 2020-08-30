/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// var climbStairs = function(n) {
//   if (n === 1) {
//     return 1
//   } 
//   if (n === 2) {
//     return 2
//   }
//   return climbStairs(n - 1) + climbStairs(n - 2)
// };


// let dp = new Map().set(1, 1).set(2, 2)
// var climbStairs = function(n) {
//   if (dp.has(n)) {
//     return dp.get(n)
//   }
//   let result = climbStairs(n - 1) + climbStairs(n - 2)
//   dp.set(n, result)
//   return result
// };

// var climbStairs = function(n) {
//   if (n === 1 || n === 2) {
//     return n
//   }
//   let prev = 2
//   let beforePrev = 1
//   let temp = null
//   for (let i = 3; i <= n; i++) {
//     temp = prev
//     prev = beforePrev + prev
//     beforePrev = temp
//   }
//   return prev
// };
// var climbStairs = function (n) {
//   const fn = []
//   fn[1] = 1
//   fn[2] = 2
//   for (let i = 3; i <= n; i++) {
//     fn[i] = fn[i - 1] + fn[i - 2]
//   }
//   return fn[n]
// }
let dp = new Map().set(1, 1).set(2, 2)
var climbStairs = function (n) {
  if (dp.has(n)) {
    return dp.get(n)
  }
  let res = climbStairs(n - 1) + climbStairs(n - 2)
  dp.set(n, res)
  return res
}
// @lc code=end

