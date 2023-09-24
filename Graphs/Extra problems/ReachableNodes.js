

var reachableNodes = function(n, edges, restricted) {

    let dfs = (node) => {
        for(let neighbors of graph.get(node)){
            if(!seen[neighbors] && !rest.has(neighbors)){
                seen[neighbors] = true;
                dfs(neighbors);
            }
        }
    }

    let graph = new Map();
    let seen = new Array(n).fill(false);
    let rest = new Set(restricted);
  
    for(let i = 0; i < n ; i++){
      graph.set(i, [])
    }  
  
    for(let [x, y ] of edges){
        graph.get(x).push(y)
        graph.get(y).push(x)
    }
    seen[0] = true;
    dfs(0);

    let ans = 0;
    for(let value of seen){
        if(value){
            ans += 1
        }
    }
    return ans;
  };


  console.log(reachableNodes(7, [[0,1],[1,2],[3,1],[4,0],[0,5],[5,6]], [4,5]))