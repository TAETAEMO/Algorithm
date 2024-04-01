/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function insertionSortList(head) {
  if (head === null) {
    return head
  }
  let node = head.next
  while (node) {
    let prev = head
    while (prev !== node && prev.val <= node.val) {
      prev = prev.next
    }
    if (prev === node) {
      // everyting remains sorted in this pass
      node = node.next
      continue
    }
    let temp1 = node.val
    let temp2 = null
    while (prev) {
      if (temp1 === null) {
        temp1 = prev.val
        prev.val = temp2
        temp2 = null
      } else if (temp2 === null) {
        temp2 = prev.val
        prev.val = temp1
        temp1 = null
      }
      if (prev === node) {
        break
      }
      prev = prev.next
    }
    node = node.next
  }
  return head
}