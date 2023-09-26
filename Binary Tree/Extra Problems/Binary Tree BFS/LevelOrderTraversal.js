/*

Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]
Example 2:

Input: root = [1]
Output: [[1]]
Example 3:

Input: root = []
Output: []
*/

var levelOrder = function (root) {
  if (root == null) return [];

  let queue = [root];
  let ans = [];

  while (queue.length) {
    let newQueue = [];
    let values = [];
    for (let i = 0; i < queue.length; i++) {
      let node = queue[i];
      values.push(node.val);

      if (node.left) {
        newQueue.push(node.left);
      }

      if (node.right) {
        newQueue.push(node.right);
      }
    }
    ans.push(values);
    queue = newQueue;
  }

  return ans;
};
