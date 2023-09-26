/*
Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on.

Return the smallest level x such that the sum of all the values of nodes at level x is maximal.

Input: root = [1,7,0,7,-8,null,null]
Output: 2
Explanation: 
Level 1 sum = 1.
Level 2 sum = 7 + 0 = 7.
Level 3 sum = 7 + -8 = -1.
So we return the level with the maximum sum which is level 2.
*/

var maxLevelSum = function (root) {
  let queue = [root];
  let ans = -Infinity;
  let level = 0;
  let minLevel = 0;

  while (queue.length) {
    let nextQueue = [];
    let maxSum = 0;

    for (let i = 0; i < queue.length; i++) {
      let node = queue[i];

      maxSum += node.val;
      node.left && nextQueue.push(node.left);
      node.right && nextQueue.push(node.right);
    }
    level++;
    if (maxSum > ans) {
      ans = maxSum;
      minLevel = level;
    }
    queue = nextQueue;
  }

  return minLevel;
};
