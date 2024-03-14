/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    return judge(p, q);
    
    function judge(n1, n2){
        if(n1 === null && n2 === null){
            return true;
        }
        else if(n1 === null || n2 === null){
            return false;
        }
        else if(n1.val !== n2.val){
            return false;
        }
        else {
            return judge(n1.left, n2.left) && judge(n1.right, n2.right);
        }
    }
};