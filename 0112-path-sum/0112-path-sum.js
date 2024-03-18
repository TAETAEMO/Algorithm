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
 * @param {number} targetSum
 * @return {boolean}
 */
const hasPathSum = (root, targetSum) => {
  if (root === null) return false;

  const calValue = targetSum - root.val;
  if (root.left === null && root.right === null) {
    if (calValue === 0) return true;
    return false;
  }

  return hasPathSum(root.left, calValue) || hasPathSum(root.right, calValue);
};