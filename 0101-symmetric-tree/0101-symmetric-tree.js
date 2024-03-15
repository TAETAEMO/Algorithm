/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetricLeftRight = (left, right) => {
    if(left===null && right===null) return true;
    if((left !== null && right === null) || (left === null && right !== null)) return false;
    if(left.val !== right.val) return false;
    
    return isSymmetricLeftRight(left.left, right.right) && isSymmetricLeftRight(left.right, right.left);
}

const isSymmetric = (root) =>{
    if(!root) return true;
    return isSymmetricLeftRight(root.left, root.right);
};