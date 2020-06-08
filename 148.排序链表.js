/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
 */

// @lc code=start
// 快排 不满足时间复杂度和空间复杂度
class Node {
  constructor (val) {
    this.val = val
    this.next = null
  }
}
class NodeList {
  constructor (arr) {
    const head = new Node(arr.shift())
    let next = head
    arr.forEach(item => {
      next.next = new Node(item)
      next = next.next
    })
    return head // this 绑定到返回到对象上
  }
}
const swap = function (p, q) {
  let val = p.val
  p.val = q.val
  q.val = val
}
const partion = function (begin, end = null) {
  const val = begin.val
  let p = begin
  let q = begin.next
  while (q !== end) {
    if (q.val < val) {
      p = p.next
      swap(p, q)
    }
    q = q.next
  }
  swap(p, begin)
  return p
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(begin, end) {
  if (begin !== end && begin !== null) {
    const part = partion(begin, end)
    sortList(begin, part)
    sortList(part.next, end)
  }
  return begin
};
// @lc code=end

