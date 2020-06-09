/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let map = (arr, r = []) => {
    for (let i = 0 , len = arr.length; i < len; i++) {
      if (i === 0) {
        r = r.concat(arr[0])
      } else if (i === len - 1) {
        r = r.concat(arr[i].reverse())
      } else {
        r.push(arr[i].pop())
      }
    }
    arr.shift()
    arr.pop()
    for(let i = arr.length - 1; i >=0; i--) {
      arr[i].length && r.push(arr[i].shift())
    }
    if (arr.length && arr[0].length) {
       return map(arr, r)
    } else {
      return r
    }
  }
  return map(matrix, [])
};
// @lc code=end

