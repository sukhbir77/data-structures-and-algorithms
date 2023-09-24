/**
 Given the root of a binary tree, the value of a target node target, and an integer k, 
 return an array of the values of all nodes that have a distance k from the target node.

You can return the answer in any order.


 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function (root, target, k) {
  let dfs = (node, parent) => {
    if (node == null) return;

    node.parent = parent;
    dfs(node.left, node);
    dfs(node.right, node);
  };

  dfs(root, null);
  let queue = [target];
  let seen = new Set([target]);
  let distance = 0;

  while (queue.length && distance < k) {
    let nextQueue = [];

    for (let i = 0; i < queue.length; i++) {
      let node = queue[i];
      for (let neighbor of [node.left, node.right, node.parent]) {
        if (neighbor && !seen.has(neighbor)) {
          seen.add(neighbor);
          nextQueue.push(neighbor);
        }
      }
    }
    queue = nextQueue;
    distance++;
  }
  return queue.map((node) => node.val);
};
