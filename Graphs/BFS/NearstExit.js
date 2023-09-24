/*
You are given an m x n matrix maze (0-indexed) with empty cells (represented as '.') and 
walls (represented as '+'). You are also given the entrance of the maze, where entrance = [entrancerow, entrancecol] 
denotes the row and column of the cell you are initially standing at.

In one step, you can move one cell up, down, left, or right. You cannot step into a cell with a wall, 
and you cannot step outside the maze. Your goal is to find the nearest exit from the entrance. An exit is defined as 
an empty cell that is at the border of the maze. The entrance does not count as an exit.

Return the number of steps in the shortest path from the entrance to the nearest exit, or -1 if no such path exists.

Input: maze = [["+","+",".","+"],[".",".",".","+"],["+","+","+","."]], entrance = [1,2]
Output: 1
Explanation: There are 3 exits in this maze at [1,0], [0,2], and [2,3].
Initially, you are at the entrance cell [1,2].
- You can reach [1,0] by moving 2 steps left.
- You can reach [0,2] by moving 1 step up.
It is impossible to reach [2,3] from the entrance.
Thus, the nearest exit is [0,2], which is 1 step away.

Input: maze = [["+","+","+"],[".",".","."],["+","+","+"]], entrance = [1,0]
Output: 2
Explanation: There is 1 exit in this maze at [1,2].
[1,0] does not count as an exit since it is the entrance cell.
Initially, you are at the entrance cell [1,0].
- You can reach [1,2] by moving 2 steps right.
Thus, the nearest exit is [1,2], which is 2 steps away.

Input: maze = [[".","+"]], entrance = [0,0]
Output: -1
Explanation: There are no exits in this maze.
*/


    
/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) {
    let isValid = (row, col) => {
        return row >= 0 && row < m && col >= 0 && col < n && maze[row][col] == ".";
    }

    let directions = [[0,1], [1,0], [-1,0], [0, -1]]
    let m = maze.length;
    let n = maze[0].length;
    let queue = [entrance];

    let seen = []
    let steps = 0;

    for(let i = 0;  i < m ; i++){
        seen.push(new Array(n).fill(false));
    }
    seen[entrance[0]][entrance[1]] = true;

    while(queue.length){
        let newQueue = [];
        let currLength = queue.length;
        steps++;

        for(let i = 0; i < currLength; i++){
            let [row, col] = queue[i];

            for(let [dx, dy] of directions){
                let nextRow  = dx + row;
                let nextCol = dy + col;
                if(isValid(nextRow, nextCol) && !seen[nextRow][nextCol]){
                    // console.log(`Row is ${row} and Column is ${col} ===== NextRow is ${nextRow} and nextColumn is ${nextCol}`)
                    if(nextRow + 1 >= m  || nextCol + 1 >= n || nextRow - 1 < 0 || nextCol - 1 < 0){
                    return steps;
                }
                   seen[nextRow][nextCol] = true;
                    newQueue.push([nextRow, nextCol]);
                }
            }
        }
        queue = newQueue;
    }


    return -1;
};

console.log(nearestExit([["+","+","+"],[".",".","."],["+","+","+"]], [1,0]))