/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
  if (!root) return []
  let queue = [root]
  let maximums = []

  while (queue.length) {
    let max = Number.MIN_SAFE_INTEGER
    // 这里需要先缓存length 这个length代表当前层级的所有节点
    // 在循环开始后 会push新的节点 length就不稳定了
    let len = queue.length
    for (let i = 0; i < len; i++) {
      let node = queue[i]
      max = Math.max(node.val, max)

      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }

    // 本「层级」处理完毕，截取掉。
    for (let i = 0; i < len; i++) {
      queue.shift()
    }

    // 这个for循环结束后 代表当前层级的节点全部处理完毕
    // 直接把计算出来的最大值push到数组里即可。
    maximums.push(max)
  }

  return maximums
};
// @lc code=end

