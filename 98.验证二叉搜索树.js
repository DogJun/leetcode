/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// class Node {
//   constructor (val) {
//     this.val = val
//     this.left = this.right = null;
//   }
// }
// class Tree {
//   constructor (data) {
//     console.log('data', data)
//     const root = new Node(data.shift())
//     data.forEach(item => {
//       this.insert(root, item)
//     })
//   }
//   insert (node, data) {
//     if (node.val > data) {
//       if (!node.left) {
//         node.left = data
//       } else {
//         this.insert(node.left, data)
//       }
//     } else {
//       if (!node.right) {
//         node.right = data
//       } else {
//         this.insert(node.right, data)
//       }
//     }
//   }
// }
const helper = (root, lower, upper) => {
  if (root === null) return true
  if (root.val <= lower || root.val >= upper) return false
  return helper(root.left, lower, root.val) && helper(root.right, root.val, upper)
} 
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 输入就是Tree的实例，不需要自己实现🙅‍♂️
var isValidBST = function(root) {
  return helper(root, -Infinity, +Infinity)
};
// @lc code=end

