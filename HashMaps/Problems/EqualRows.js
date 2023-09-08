/**
 Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) such that row ri and column cj are equal.

A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).

Input: grid = [[3,2,1],[1,7,6],[2,7,7]]
Output: 1
Explanation: There is 1 equal row and column pair:
- (Row 2, Column 1): [2,7,7]

Input: grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]
Output: 3
Explanation: There are 3 equal row and column pairs:
- (Row 0, Column 0): [3,1,2,2]
- (Row 2, Column 2): [2,4,2,2]
- (Row 3, Column 2): [2,4,2,2]
 */

function equalPair(grid) {
  let rows = new Map();
  let columns = new Map();

  // save rows in hash map
  for (let row of grid) {
    let r = row.join(",");
    rows.set(r, (rows.get(r) || 0) + 1);
  }
  let column = [];
  for (let i = 0; i < grid.length; i++) {
    column = grid.map(function (value, index) {
      return value[i];
    });

    columns.set(column.join(","), (columns.get(column.join(",")) || 0) + 1);
  }

  let ans = 0;
  for (let [key, value] of rows) {
    ans += value * columns.get(key) || 0
  }

  return ans;
}

console.log(
  equalPair([[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]])
);
