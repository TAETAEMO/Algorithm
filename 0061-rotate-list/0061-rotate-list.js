/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {            
    if(head) {
        const length = getLength(head);
        
        let leftNode = head;
        let rightNode = head;

        for(let i = 0; i < (k % length); i++) {
            rightNode = rightNode.next;
        }

        if(rightNode !== null) {
            while(rightNode.next) {
                leftNode = leftNode.next;
                rightNode = rightNode.next;
            }

            rightNode.next = head;
            head = leftNode.next;
            leftNode.next = null;        
        }        
    }
                
    return head;
};

function getLength(node) {
    let length = 0;
    
    while(node) {
        length++;
        node = node.next;
    }
    
    return length;
}
