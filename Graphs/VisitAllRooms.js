var canVisitAllRooms = function (rooms) {
  let dfs = (node) => {
    for (let keys of graph.get(node)) {
      if (!seen[keys]) {
        seen[keys] = true;
        dfs(keys);
      }
    }
  };

  let graph = new Map();
  let seen = new Array(rooms.length).fill(false);

  for (let i = 0; i < rooms.length; i++) {
    graph.set(i, rooms[i]);
  }

  seen[0] = true;
  dfs(0);

  console.log(seen);

  for (let i = 0; i < seen.length; i++) {
    if (seen[i] == false) {
      return false;
    }
  }

  return true;
};

canVisitAllRooms([[1], [2], [3], []]);
