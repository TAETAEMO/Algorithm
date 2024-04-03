/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(head === null){
        return false;
    }

    let map = new Map();

    while(head.next !== null){
        if(!map.has(head)){
            map.set(head, true);
            head = head.next;
            continue;
        }
        return true;
    }
    return false;
};