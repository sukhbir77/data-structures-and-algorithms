/*
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
You may assume all four edges of the grid are all surrounded by water.
Example 1:
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1

Example 2:
Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
*/

var numIslands = function (grid) {
  let isValid = (row, col) => {
    return 0 <= row && row < m && col >= 0 && col < n && grid[row][col] == "1";
  };

  let dfs = (row, col) => {
    for (let [dx, dy] of directions) {
      let nextRow = row + dx;
      let nextCol = col + dy;

      if (isValid(nextRow, nextCol) && !seen[nextRow][nextCol]) {
        seen[nextRow][nextCol] = true;
        dfs(nextRow, nextCol);
      }
    }
  };

  // Directions for moving in four directions;
  let directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let ans = 0;
  let m = grid.length;
  let n = grid[0].length;
  let seen = [];

  for (let i = 0; i < m; i++) {
    seen.push(new Array(n).fill(false));
  }

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (grid[row][col] == "1" && !seen[row][col]) {
        ans += 1;
        seen[row][col] = true;
        dfs(row, col);
      }
    }
  }

  return ans;
};

numIslands([
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
]);
