/**
 
 */

var maximalNetworkRank = function(n, roads) {
    let degreeArr = new Array(n).fill(0);
    let isConnected = Array.from(({length: n}), () => Array(n).fill(0));
    let ans = 0;

    for(let [x,y] of roads){
        degreeArr[x]++;
        degreeArr[y]++;
        isConnected[x][y] = 1;
        isConnected[y][x] = 1;
    }

    for(let i = 0; i < n; i++){
        for(let j = i + 1; j < n; j++){
            ans = Math.max(ans, degreeArr[i] + degreeArr[j] - isConnected[i][j]);
        }
    }

    return ans;
};

maximalNetworkRank(8,[[0,1],[1,2],[2,3],[2,4],[5,6],[5,7]])