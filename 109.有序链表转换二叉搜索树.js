/*
 * @lc app=leetcode.cn id=109 lang=javascript
 *
 * [109] 有序链表转换二叉搜索树
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
  let arr = []
  while (head) {
    arr.push(head.val)
    head = head.next
  }
  function buildBST (left, right) {
    if (left > right) return null
    let mid = Math.floor((left + right) / 2)
    let root = new TreeNode(arr[mid])
    root.left = buildBST(left, mid - 1)
    root.right = buildBST(mid + 1, right)
    return root
  }
  return buildBST(0, arr.length - 1)
};
// @lc code=end

