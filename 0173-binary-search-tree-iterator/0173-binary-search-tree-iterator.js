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
 */
function BSTIterator(root) {
  var stack = [];
  return {hasNext, next};

  function hasNext() {
    return root || stack.length;
  }

  function next() {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    var result = root.val;
    root = root.right;
    return result;
  }
}