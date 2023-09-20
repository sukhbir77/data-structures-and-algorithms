/*
Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.

Example 1:
Input: root = [4,2,6,1,3]
Output: 1

Example 2:
Input: root = [1,0,48,null,null,12,49]
Output: 1
*/

var getMinimumDifference = function (root) {
  let dfs = (node) => {
    if (node == null) return;

    dfs(node.left);
    values.push(node.val);
    dfs(node.right);
  };
  let values = [];
  dfs(root);
  let ans = values[0];

  for (let num of values) {
    if (Math.abs(target - num) < Math.abs(target - ans)) {
      ans = num;
    }
  }

  return ans;
};
