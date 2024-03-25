/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList = head => {
  if (!head || !head.next) return head;
  let prev = head;
  let tail = head.next;
  while (tail) {
    tail.prev = prev;
    prev = tail;
    tail = tail.next;
  }
  let cur = head;
  while (cur !== prev && cur.prev !== prev) {
    const next = cur.next;
    cur.next = prev;
    prev.next = next;
    prev = prev.prev;
    cur = next;
  }
  cur.next = null;
  return head;
};