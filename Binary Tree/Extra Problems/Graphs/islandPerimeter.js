var islandPerimeter = function (grid) {
  let isValid = (row, col) => {
    return row >= 0 && row < m && col >= 0 && col < n;
  };
  let directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  let m = grid.length;
  let n = grid[0].length;

  let ans = 0;
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (grid[row][col] == 1) {
        let number = 0;
        for (let [dx, dy] of directions) {
          let nextRow = dx + row;
          let nextCol = dy + col;
          if (!isValid(nextRow, nextCol)) {
            number++;
          } else if (grid[nextRow][nextCol] !== 1) {
            number++;
          }
        }
        console.log(number);
        ans += number;
      }
    }
  }

  return ans;
};

console.log(
  islandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
  ])
);
