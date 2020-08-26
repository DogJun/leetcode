/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  // 转化为数组，比较🌶️🐤的思路
  // const res = []
  // let temp = head
  // while (temp) {
  //   if (temp.val !== val) {
  //     res.push(temp.val)
  //   }
  //   temp = temp.next
  // }
  // if (!res.length) return null
  // let i = 0
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
  // 建立一个傀儡节点
  let root = new ListNode()
  root.next = head
  let cur = root
  while (cur) {
    let next = cur.next
    if (!next) break;
    if (next.val === val) {
      cur.next = cur.next.next
    } else {
      cur = cur.next
    }
  }
  return root.next
};
// @lc code=end

