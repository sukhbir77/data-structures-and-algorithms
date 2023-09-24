/*

Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.

The distance between two adjacent cells is 1.

*/


function matrix(mat){
    let isValid = (row, col) => {
        return 0 <= row && row < m && 0 <= col && col < n && mat[row][col] == 1;
    }
    // All four directions 
    let directions = [[0,1], [1,0], [0, -1], [-1, 0]];
    let m = mat.length;
    let n = mat[0].length;

    let queue = [];
    let seen = [];

    for(let i = 0;  i < m; i++){
        seen.push(new Array(n).fill(false));
    }

    for(let row = 0; row < m;  row++){
        for(let col = 0; col < n; col++){
            if(mat[row][col] == 0){
                queue.push([row, col]);
                seen[row][col] = true;
            }
        }
    }

    let steps = 0; 
    while(queue.length){
        let newQueue = [];
        let currLength = queue.length;
        steps++;

        for(let i = 0; i < currLength; i++){
            const [row, col] = queue[i];
            for(let [dx, dy] of directions){
                let nextRow  = row + dx;
                let nextCol = col + dy;
                if(isValid(nextRow, nextCol) && !seen[nextRow][nextCol]){
                    newQueue.push([nextRow, nextCol]);
                    seen[nextRow][nextCol] = true;
                    mat[nextRow][nextCol] = steps;
                }
            }
        }
        queue = newQueue;
    }


    return mat;
}

console.log(matrix([[0,0,0],[0,1,0],[0,0,0]]))