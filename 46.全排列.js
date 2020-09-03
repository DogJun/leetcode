/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  // 缓存长度
  const len = nums.length
  // 记录当前排列的内容
  const curr = []
  // 结果数组
  const res = []
  // 避免使用同个数字
  const visited = {}
  function dfs (nth) {
    if (nth === len) {
      res.push(curr.slice())
      return
    }
    for (let i = 0; i < len; i++) {
      if (!visited[nums[i]]) {
        visited[nums[i]] = 1
        curr.push(nums[i])
        dfs(nth+1)
        curr.pop()
        visited[nums[i]] = 0
      }
    }
  } 
  dfs(0)
  return res
};
// @lc code=end

