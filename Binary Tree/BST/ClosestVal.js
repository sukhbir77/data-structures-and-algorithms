/*
Given the root of a binary search tree and a target value, 
return the value in the BST that is closest to the target. If there are multiple answers, print the smallest.

Input: root = [4,2,5,1,3], target = 3.714286
Output: 4

Example 2:
Input: root = [1], target = 4.428571
Output: 1
*/

var closestValue = function (root, target) {
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
