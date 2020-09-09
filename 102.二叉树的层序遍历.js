/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  const res = []
  const queue = []
  queue.push(root)
  while (queue.length) {
    // 先缓存 length
    const len = queue.length
    const temp = []
    for (let i = 0; i < len; i++) {
      const node = queue.shift()
      if (node) {
        temp.push(node.val)
        if (node.left) {
          queue.push(node.left)
        }
        if (node.right) {
          queue.push(node.right)
        }
      }
    }
    temp.length && res.push(temp)
  }
  return res
};
// @lc code=end

