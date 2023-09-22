/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
    
    let conversionToHash = (x, y) => {
        return `${x},${y}`;
    }

    let dfs = (node) => {
        let ans = 0;
        for(let neighbor of graph.get(node)){
            if(!seen[neighbor]){
                if(roads.has(conversionToHash(node,neighbor))){
                    ans += 1
                }
                seen[neighbor] = true;
                ans += dfs(neighbor)
            }
        }
        return ans;
    }

    let graph = new Map();
    let roads = new Set();
    let seen = new Array(n).fill(false);

    for(let i = 0; i < n; i++){
        graph.set(i, []);
    }

    for(let [x, y] of connections){
        graph.get(x).push(y)
        graph.get(y).push(x)
        roads.add(conversionToHash(x,y));
    }

    seen[0] = true;

    return dfs(0);
};

minReorder(6, [[0,1],[1,3],[2,3],[4,0],[4,5]]);