/**
Given the root of a binary tree, invert the tree, and return its root.

Example 1:
Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]

Example 2:
input: root = [2,1,3]
Output: [2,3,1]

Example 3:
Input: root = []
Output: []
 */

var invertTree = function (root) {
  let dfs = (node) => {
    if (node == null) return;

    let temp = node.left;
    node.left = node.right;
    node.right = temp;
    dfs(node.left);
    dfs(node.right);
  };

  dfs(root);
  
  return root;
};
