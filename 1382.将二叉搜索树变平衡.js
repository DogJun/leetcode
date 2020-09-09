/*
 * @lc app=leetcode.cn id=1382 lang=javascript
 *
 * [1382] 将二叉搜索树变平衡
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
 * @return {TreeNode}
 */
var balanceBST = function(root) {
  const arr = []
  function midOrder (root) {
    if (!root) return
    midOrder(root.left)
    arr.push(root.val)
    midOrder(root.right)
  }
  function buildAVL (low, high) {
    if (low > high) return null
    const mid = Math.floor((low + high) / 2)
    const curr = new TreeNode(arr[mid])
    curr.left = buildAVL(low, mid - 1)
    curr.right = buildAVL(mid + 1, high)
    return curr
  }
  midOrder(root)
  return buildAVL(0, arr.length - 1)
};
// @lc code=end

