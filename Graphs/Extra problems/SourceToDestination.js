var validPath = function (n, edges, source, destination) {
  let dfs = (node) => {
    if (node == destination) {
      return true;
    }

    if (!seen[node]) {
      seen[node] = true;
      for (let nextNode of graph.get(node)) {
        if (dfs(nextNode)) {
          return true;
        }
      }
    }
    return false;
  };

  let seen = new Array(n).fill(false);
  let graph = new Map();

  for (let i = 0; i < n; i++) {
    graph.set(i, []);
  }

  for (let [x, y] of edges) {
    graph.get(x).push(y);
    graph.get(y).push(x);
  }

  return dfs(source);
};

console.log(
  validPath(
    6,
    [
      [0, 1],
      [0, 2],
      [3, 5],
      [5, 4],
      [4, 3],
    ],
    0,
    5
  )
);
