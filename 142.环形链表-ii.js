/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  if (!head || !head.next) {
    return null;
  }
  let P1 = head.next;
  let P2 = head.next.next;
  // 1.判断是否有环
  while (P1 != P2) {
    if (P2 === null || P2.next === null) {
      return null;
    }
    P1 = P1.next;
    P2 = P2.next.next;
  }
  // 2.获取环的长度
  let temp = P1;
  let length = 1;
  P1 = P1.next;
  while (temp != P1) {
    P1 = P1.next;
    length++;
  }
  // 3.找公共节点
  P1 = P2 = head;
  while (length-- > 0) {
    P2 = P2.next;
  }
  while (P1 != P2) {
    P1 = P1.next;
    P2 = P2.next;
  }
  return P1;
};
// @lc code=end

