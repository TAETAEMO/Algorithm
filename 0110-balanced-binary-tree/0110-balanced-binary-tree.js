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
const searchDepth = (node, depth) => {
  if (node === null) return depth;
  depth++;

  const leftDepth = searchDepth(node.left, depth);
  const rightDepth = searchDepth(node.right, depth);

  if (leftDepth === -1 || rightDepth === -1) return -1;
  if (Math.abs(leftDepth - rightDepth) > 1) return -1;

  const max = Math.max(leftDepth, rightDepth);
  return max;
};

const isBalanced = (root) => {
  if (root === null) return true;
  return searchDepth(root, 0) !== -1;
};