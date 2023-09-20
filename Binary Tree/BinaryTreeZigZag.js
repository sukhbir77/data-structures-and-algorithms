/*
Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. 
(i.e., from left to right, then right to left for the next level and alternate between).

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[20,9],[15,7]]

Example 2:
Input: root = [1]
Output: [[1]]

Example 3:
Input: root = []
Output: []
*/

var zigzagLevelOrder = function (root) {
  if (root == null) return [];

  let queue = [root];
  let ans = [[root.val]];
  let level = 0;

  while (queue.length) {
    let newQueue = [];

    for (let i = 0; i < queue.length; i++) {
      let node = queue[i];

      if (node.right) {
        newQueue.push(node.right);
      }
      if (node.left) {
        newQueue.push(node.left);
      }
    }
    let arr = [];

    if (level % 2 == 0) {
      for (let i = 0; i < newQueue.length; i++) {
        arr.push(newQueue[i].val);
      }
    } else {
      for (let i = newQueue.length - 1; i >= 0; i--) {
        arr.push(newQueue[i].val);
      }
    }
    if (arr.length > 0) ans.push(arr);
    queue = newQueue;
    level++;
  }

  return ans;
};
