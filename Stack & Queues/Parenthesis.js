

var isValid = function(s) {
    let stack = []
    let map = {
        "(" : ")",
        "{" : "}",
        "[" : "]"
    }

    for(let c of s){
        if(c in map){
            stack.push(c);
        }
        else{
            let previousOpen = stack.pop();
            if(map[previousOpen] != c){
                return false;
            }
        }
    }

    return stack.length == 0;
};

console.log(isValid("()"))