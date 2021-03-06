/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let head = new ListNode('head')
  let temp = head
  let add = 0
  let sum = 0
  while (l1 || l2) {
    sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + add
    temp.next = new ListNode(sum % 10)
    temp = temp.next
    add = sum >= 10 ? 1 : 0
    l1 && (l1 = l1.next)
    l2 && (l2 = l2.next)
  }
  add && (temp.next = new ListNode(add))
  return head.next
};
// @lc code=end

