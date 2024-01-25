/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var curr = head;
    var prev, index = 0;
    
    // ListNode의 길이 구하기
    var list = head;
    var len = 1;
    while(list.next){
        len++;
        list = list.next;
    }
    
    if(n == len) {
        head = curr.next;
    } else {
        while(index++ < len - n){
            prev = curr;
            curr = prev.next;
            console.log(prev, curr)
        }
        prev.next = curr.next;
        console.log('result', prev, curr, head)
    }
    curr.next = undefined;
    
    return head;
};