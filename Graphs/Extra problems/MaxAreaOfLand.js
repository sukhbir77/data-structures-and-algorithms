var maxAreaOfIsland = function (grid) {
  let isValid = (row, col) => {
    return row >= 0 && row < m && col >= 0 && col < n && grid[row][col] == 1;
  };

  let dfs = (row, col) => {
    if (!isValid(row, col)) return 0;
    let ans = 1;
    for (let [dx, dy] of directions) {
      let nextRow = row + dx;
      let nextCol = col + dy;

      if (isValid(nextRow, nextCol) && !seen[nextRow][nextCol]) {
        seen[nextRow][nextCol] = true;
        ans += dfs(nextRow, nextCol);
      }
    }
    return ans;
  };

  let directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  let m = grid.length;
  let n = grid[0].length;
  let seen = [];
  let ans = 0;

  for (let i = 0; i < m; i++) {
    seen.push(new Array(n).fill(false));
  }

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (isValid(row, col) && !seen[row][col]) {
        seen[row][col] = true;
        ans = Math.max(dfs(row, col), ans);
      }
    }
  }
  return ans;
};

console.log(
  maxAreaOfIsland([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  ])
);
