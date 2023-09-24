var maximumDetonation = function (bombs) {
  let graph = new Map();
  let m = bombs.length;

  // Initialize and enter the values in the graph for each bomb O(n^2)
  for (let i = 0; i < m; i++) {
    graph.set(i, []);
    for (let j = 0; j < m; j++) {
      let [xi, yi, ri] = bombs[i];
      let [xj, yj, _] = bombs[j];

      // Apply Euclidean Algo to find the distance between the radius;
      // We can then create an edge between the two bombs if they satisfy the equation. Then It would mean that bomb will denonate the other one.
      if (ri ** 2 >= (xi - xj) ** 2 + (yi - yj) ** 2) {
        graph.get(i).push(j);
      }
    }
  }

  let bfs = (node) => {
    let queue = [node];
    let seen = new Set([node]);

    while (queue.length) {
      let newQueue = [];

      for (let i = 0; i < queue.length; i++) {
        let nextNode = queue[i];
        for (let neighbor of graph.get(nextNode)) {
          if (!seen.has(neighbor)) {
            seen.add(neighbor);
            newQueue.push(neighbor);
          }
        }
      }

      queue = newQueue;
    }

    return seen.size;
  };

  let ans = 0;

  for (let i = 0; i < graph.size; i++) {
    ans = Math.max(ans, bfs(i));
  }

  return ans;
};

console.log(
  maximumDetonation([
    [1, 2, 3],
    [2, 3, 1],
    [3, 4, 2],
    [4, 5, 3],
    [5, 6, 4],
  ])
);
