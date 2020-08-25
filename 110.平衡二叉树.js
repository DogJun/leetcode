/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced = function(root) {
  if (!root) return true
  const lDepth = getDepth(root.left)
  const rDepth = getDepth(root.right)
  if (Math.abs(lDepth - rDepth) > 1) {
    return false
  }
  return isBalanced(root.left) && isBalanced(root.right)
};
var getDepth = function (root) {
  return root ? Math.max(getDepth(root.left), getDepth(root.right)) + 1 : 0
}
// @lc code=end

