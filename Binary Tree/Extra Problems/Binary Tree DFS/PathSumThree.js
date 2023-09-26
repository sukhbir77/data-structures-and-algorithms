/**
 Given the root of a binary tree and an integer targetSum, return the number of paths where the sum of the values along the path equals targetSum.

The path does not need to start or end at the root or a leaf, but it must go downwards (i.e., traveling only from parent nodes to child nodes).

Input: root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
Output: 3
Explanation: The paths that sum to 8 are shown.

Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
Output: 3
 */
var pathSum = function (root, targetSum) {
  let dfs = (node, currSum) => {
    if (!node) return;

    if (currSum + node.val == targetSum) {
      ans += 1;
    }

    currSum += node.val;
    // console.log(`At Node ${node.val} Sum is ${currSum}`)
    dfs(node.left, currSum);
    dfs(node.right, currSum);
  };

  let dfsForEach = (node) => {
    if (!node) return;

    // console.log(`${node.val} **`)
    dfs(node, 0);
    dfsForEach(node.left);
    dfsForEach(node.right);
  };
  let ans = 0;
  dfsForEach(root);

  return ans;
};
