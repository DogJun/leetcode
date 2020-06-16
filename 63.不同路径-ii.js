/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  // 行
  const n = obstacleGrid.length
  // 列
  const m = obstacleGrid[0].length
  const dp = new Array(n)
  for (let i = 0; i < n; i++) {
    dp[i] = new Array(m).fill(0)
  }
  dp[0][0] = obstacleGrid[0][0] === 1 ? 0 : 1
  if (dp[0][0] === 0) {
    return 0
  } 
  for (let j = 1; j < n; j++) {
    if (obstacleGrid[j][0] !== 1) {
      dp[j][0] = dp[j-1][0]
    }
  }
  for (let r = 1; r < m; r++) {
    if (obstacleGrid[0][r] !== 1) {
      dp[0][r] = dp[0][r-1]
    }
  }
  for (let h = 1; h < n; h++) {
    for (let l = 1; l < m; l++) {
      if (obstacleGrid[h][l] !== 1) {
        dp[h][l] = dp[h][l - 1] + dp[h-1][l]
      }
    }
  }
  return dp[n-1][m-1]
};
// @lc code=end

