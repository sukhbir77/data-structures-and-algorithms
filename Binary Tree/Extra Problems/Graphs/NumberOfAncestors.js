/*
You are given a positive integer n representing the number of nodes of a Directed Acyclic Graph (DAG). The nodes are numbered from 0 to n - 1 (inclusive).

You are also given a 2D integer array edges, where edges[i] = [fromi, toi] denotes that there is a unidirectional edge from fromi to toi in the graph.

Return a list answer, where answer[i] is the list of ancestors of the ith node, sorted in ascending order.

A node u is an ancestor of another node v if u can reach v via a set of edges.

 Input: n = 8, edgeList = [[0,3],[0,4],[1,3],[2,4],[2,7],[3,5],[3,6],[3,7],[4,6]]
Output: [[],[],[],[0,1],[0,2],[0,1,3],[0,1,2,3,4],[0,1,2,3]]
Explanation:
The above diagram represents the input graph.
- Nodes 0, 1, and 2 do not have any ancestors.
- Node 3 has two ancestors 0 and 1.
- Node 4 has two ancestors 0 and 2.
- Node 5 has three ancestors 0, 1, and 3.
- Node 6 has five ancestors 0, 1, 2, 3, and 4.
- Node 7 has four ancestors 0, 1, 2, and 3.\

*/

var getAncestors = function (n, edges) {
  // Build a graph
  const graph = new Array(n);
  for (let i = 0; i < graph.length; i++) {
    graph[i] = [];
  }
  for (const [from, to] of edges) {
    graph[from].push(to);
  }

  // Initialize output array
  const ancestors = new Array(n);
  for (let i = 0; i < ancestors.length; i++) {
    ancestors[i] = [];
  }

  // Process all ancestors from 0 to n. This will ensure sorted order in the output.
  for (let ancestor = 0; ancestor < graph.length; ancestor++) {
    const neighbors = graph[ancestor];

    // Use BFS to traverse the entire path from any ancestor
    let queue = neighbors;

    // A given node can be reached from an ancestor by different paths
    // We only want to record the ancestor once, so the first time you reach a node
    // mark that node as seen
    const seen = new Set();
    while (queue.length) {
      const nextQueue = [];

      for (let i = 0; i < queue.length; i++) {
        const currNode = queue[i];

        // Only record the ancestor if we haven't seen this node yet
        if (!seen.has(currNode)) {
          seen.add(currNode);
          ancestors[currNode].push(ancestor);

          // The first time we reach the node, we populate the queue with the neighbors
          // to continue the BFS
          for (const nextNode of graph[currNode]) {
            nextQueue.push(nextNode);
          }
        }
      }

      queue = nextQueue;
    }
  }

  return ancestors;
};

getAncestors(8, [
  [0, 3],
  [0, 4],
  [1, 3],
  [2, 4],
  [2, 7],
  [3, 5],
  [3, 6],
  [3, 7],
  [4, 6],
]);
