/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (!l1) return l2
  if (!l2) return l1
  let head 
  if (l1.val < l2.val) {
    head = l1
    head.next = mergeTwoLists(l1.next, l2)
  } else {
    head = l2
    head.next = mergeTwoLists(l1, l2.next)
  }
  return head
};
// @lc code=end

