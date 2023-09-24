/*
You have a graph of n nodes. You are given an integer n and an array edges where edges[i] = [ai, bi] indicates that 
there is an edge between ai and bi in the graph.

Return the number of connected components in the graph.

Input: n = 5, edges = [[0,1],[1,2],[3,4]]
Output: 2

Input: n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]
Output: 1
*/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function (n, edges) {
  let dfs = (node) => {
    for (let nextNode of graph.get(node)) {
      if (!seen[nextNode]) {
        seen[nextNode] = true;
        dfs(nextNode);
      }
    }
  };
  let graph = new Map();
  let seen = new Array(n).fill(false);
  let ans = 0;

  for (let i = 0; i < n; i++) {
    graph.set(i, []);
  }

  for (let [x, y] of edges) {
    graph.get(x).push(y);
    graph.get(y).push(x);
  }

  for (let i = 0; i < n; i++) {
    if (!seen[i]) {
      seen[i] = true;
      ans += 1;
      dfs(i);
    }
  }

  return ans;
};
