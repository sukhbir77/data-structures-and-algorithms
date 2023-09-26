/**
Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of the node values in the path 
equals targetSum. Each path should be returned as a list of the node values, not node references.

A root-to-leaf path is a path starting from the root and ending at any leaf node. A leaf is a node with no children.
 */
var pathSum = function (root, targetSum) {
  let dfs = (node, currSum, path) => {
    if (node == null) return;

    if (node.right == null && node.left == null) {
      if (currSum + node.val == targetSum) {
        ans.push([...path, node.val]);
        return;
      }
    }

    // Current Sum From Root to Current Node.
    currSum += node.val;
    dfs(node.left, currSum, [...path, node.val]);
    dfs(node.right, currSum, [...path, node.val]);
  };
  let ans = [];
  dfs(root, 0, []);

  return ans;
};
