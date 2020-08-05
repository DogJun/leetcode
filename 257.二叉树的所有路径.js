/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  if (root === null) return []
  let res = []
  let path = ''
  help(root, res, path)
  return res  
};
var help = function (root, res, path) {
  if (root === null) return
  if (path === '') {
    path = `${root.val}`
  } else {
    path += `->${root.val}`
  }
  if (root.left === null && root.right === null) {
    res.push(path)
  }
  root.left && help(root.left, res, path)
  root.right && help(root.right, res, path)
}
// @lc code=end

