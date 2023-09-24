var maximumDetonation = function(bombs) {
    let n = bombs.length, graph = Array(n).fill(0).map(() => []);
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (i === j) continue;
        let [x1, y1, radius] = bombs[i], [x2, y2] = bombs[j];
        if (getDist([x1, y1], [x2, y2]) <= radius) {
          graph[i].push(j);
        }
      }
    }

    console.log(graph)
    let ans = 0;
    for (let i = 0; i < n; i++) {
      ans = Math.max(ans, bfs(i));
    }
    return ans;
    
    function bfs(node) {
      let seen = Array(n).fill(0), queue = [node], count = 0;
      seen[node] = 1;
      while (queue.length) {
        let node = queue.shift();
        count++;
        for (let nei of graph[node]) {
          if (seen[nei]) continue;
          queue.push(nei);
          seen[nei] = 1;
        }
      }
      console.log(seen)
      return count;
    }
    
    function getDist(p1, p2) {
      let [x1, y1] = p1, [x2, y2] = p2;
      let calc1 = (x2 - x1) * (x2 - x1), calc2 = (y2 - y1) * (y2 - y1);
      return Math.sqrt(calc1 + calc2);
    }
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
  