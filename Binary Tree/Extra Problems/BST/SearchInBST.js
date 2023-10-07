/*
You are given the root of a binary search tree (BST) and an integer val.

Find the node in the BST that the node's value equals val and return the subtree rooted with that node.
If such a node does not exist, return null.

Input: root = [4,2,7,1,3], val = 2
Output: [2,1,3]

Input: root = [4,2,7,1,3], val = 5
Output: []
*/

var searchBST = function (root, val) {
  let ans;
  let dfs = (node) => {
    if (node == null) return;

    if (node.val == val) {
      ans = node;
    }
    if (val > node.val) {
      dfs(node.right);
    }
    if (val < node.val) {
      dfs(node.left);
    }
  };

  dfs(root);

  return ans || null;
};
