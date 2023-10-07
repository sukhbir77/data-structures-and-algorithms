/**
You are given an m x n binary matrix grid, where 0 represents a sea cell and 1 represents a land cell.

A move consists of walking from one land cell to another adjacent (4-directionally) land cell or walking off the boundary of the grid.

Return the number of land cells in grid for which we cannot walk off the boundary of the grid in any number of moves.

 
 */
var numEnclaves = function (grid) {
  let isValid = (row, col) => {
    return row >= 0 && row < m && col >= 0 && col < n;
  };

  let dfs = (row, col) => {
    for (let [dx, dy] of directions) {
      let nextRow = dx + row;
      let nextCol = dy + col;

      if (
        isValid(nextRow, nextCol) &&
        !seen[nextRow][nextCol] &&
        grid[nextRow][nextCol] == 1
      ) {
        seen[nextRow][nextCol] = true;
        dfs(nextRow, nextCol);
      }
    }
  };

  let directions = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];
  let m = grid.length;
  let n = grid[0].length;

  let seen = [];

  for (let i = 0; i < m; i++) {
    seen.push(new Array(n).fill(false));
  }

  let ans = 0;

  // Col 0;

  for (let row = 0; row < m; row++) {
    if (grid[row][0] == 1) {
      seen[row][0] = true;
      dfs(row, 0);
    }
  }

  // Row 0;
  for (let col = 0; col < n; col++) {
    if (grid[0][col] == 1) {
      seen[0][col] = true;
      dfs(0, col);
    }
  }

  // Col n - 1 row ->
  for (let row = 0; row < m; row++) {
    if (grid[row][n - 1] == 1 ) {
      seen[row][n - 1] = true;
      dfs(row, n - 1);
    }
  }

  // Row m - 1, Col ->
  for (let col = 0; col < n; col++) {
    if (grid[m - 1][col] == 1) {
      seen[m - 1][col] = true;
      dfs(m - 1, col);
    }
  }

  for (let row = 1; row < m; row++) {
    for (let col = 1; col < n; col++) {
      if (grid[row][col] == 1 && !seen[row][col]) {
        ans += 1;
        seen[row][col] = true;
      }
    }
  }

  return ans;
};

console.log(
  numEnclaves([
    [0, 0, 0, 1, 1, 1, 0, 1, 0, 0],
    [1, 1, 0, 0, 0, 1, 0, 1, 1, 1],
    [0, 0, 0, 1, 1, 1, 0, 1, 0, 0],
    [0, 1, 1, 0, 0, 0, 1, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 0, 0, 1, 0],
    [0, 0, 1, 0, 1, 1, 1, 1, 0, 1],
    [0, 1, 1, 0, 0, 0, 1, 1, 1, 1],
    [0, 0, 1, 0, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 1],
  ])
);
