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
 * @return {number}
 */
var sumNumbers = function(root) {
  return sum(0, root);
};

var sum = function (before, root) {
  if (!root) return before;
  var val = before * 10 + root.val;
  if (!root.left) return sum(val, root.right);
  if (!root.right) return sum(val, root.left);
  return sum(val, root.left) + sum(val, root.right);
};