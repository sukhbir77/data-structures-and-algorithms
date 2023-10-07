

var equationsPossible = function(equations) {
    let map = new Map();

    for(let i = 0; i < equations.length; i++){
        if(equations[i].includes("==")){
            map.set(1, (map.get(1) || 0)  + 1);
        }

        else if(equations[i].includes("!=")){
            map.set(2, (map.get(2) || 0) + 1)
        }
    }

    return map.size == 2 ? false : true;
};

equationsPossible(["c==c","b==d","x!=z"])