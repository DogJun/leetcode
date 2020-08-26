/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  // let res = []
  // while (head) {
  //   res.push(head.val)
  //   head = head.next
  // }
  // res.splice(-n, 1)
  // let i = 0
  // let temp
  // while (i < res.length) {
  //   if (i === 0) {
  //     head = new ListNode(res[i++])
  //     temp = head
  //   } else {
  //     temp.next = new ListNode(res[i++])
  //     temp = temp.next
  //   }
  // }
  // return head
  let pre = head
  let last = head
  for (let i = 0; i < n; i++) {
    pre = pre.next
  }
  if (!pre) return head.next
  while (pre && pre.next) {
    pre = pre.next
    last = last.next
  }
  last.next = last.next.next
  return head
};
// @lc code=end

