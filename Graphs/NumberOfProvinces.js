var findCircleNum = function(isConnected) {
    let dfs = node => {
        for (const neighbor of graph.get(node)) {
            // the next 2 lines are needed to prevent cycles
            if (!seen[neighbor]) {
                seen[neighbor] = true;
                dfs(neighbor);
            }
        }
    }
    
    // build the graph
    let n = isConnected.length;
    let graph = new Map();
    for (let i = 0; i < n; i++) {
        graph.set(i, []);
    }
    
    // [[1,1,0],[1,1,0],[0,0,1]]
    // [[1,0,0],[0,1,0],[0,0,1]]
    for (let i = 0; i < n; i++) {
        console.log(isConnected[i].length)
        for (let j = i + 1; j < n; j++) {
            if (isConnected[i][j]) {
                console.log( "Hello")
                graph.get(i).push(j);
                graph.get(j).push(i);
            }
        }
    }

    console.log(graph)
    
    let seen = new Array(n).fill(false);
    let ans = 0;

    console.log(seen);
    
    for (let i = 0; i < n; i++) {
        if (!seen[i]) {
            ans++;
            seen[i] = true;
            dfs(i);
        }
    }
    
    return ans;
};


console.log(findCircleNum([[1,1,0],[1,1,0],[0,0,1]]));