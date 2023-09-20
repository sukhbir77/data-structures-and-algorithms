/*
Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.\

Example 1:
Input: root = [1,2,3,null,5,null,4]
Output: [1,3,4]

Example 2:
Input: root = [1,null,3]
Output: [1,3]

Example 3:
Input: root = []
Output: []
*/

function rightSideView(root) {
  if (root == null) return [];

  let queue = [root];
  let ans = [root.val];

  while (queue.length) {
    let newQueue = [];

    for (let i = 0; i < queue.length; i++) {
      let node = queue[i];

      if (node.left) {
        newQueue.push(node.left);
      }

      if (node.right) {
        newQueue.push(node.right);
      }
    }

    if (newQueue[newQueue.length - 1]) {
      ans.push(newQueue[newQueue.length - 1].val);
    }

    queue = newQueue;
  }

  return ans;
}
