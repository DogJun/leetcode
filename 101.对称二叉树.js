/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
var isSymmetric = function(root) {
    function fn (left, right) {
      if (!left && !right) {
        return true
      }
      if (left && right) {
        return left.val === right.val && fn(left.left, right.right) && fn(left.right, right.left)
      }
      return false
    }
    return root ? fn(root.left, root.right) : true 
};
// @lc code=end

