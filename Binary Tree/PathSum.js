/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path 
 * such that adding up all the values along the path equals targetSum.

A leaf is a node with no children.
 */
var hasPathSum = function (root, targetSum) {
  let dfs = (node, curr) => {
    if (node == null) return false;

    // If its a leaf node means right and left are null;
    if (node.right == null && node.left == null) {
      return curr + node.val == targetSum;
    }

    curr += node.val;
    let left = dfs(node.left, curr);
    let right = dfs(node.right, curr);

    return left || right;
  };

  return dfs(root, 0);
};
