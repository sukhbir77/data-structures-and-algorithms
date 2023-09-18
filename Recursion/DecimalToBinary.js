// Using recursion convert decimal to binary


function toBinary(decimal_number){
    
    if (decimal_number == 0)
        return 0;
    else
        return ((decimal_number % 2) + 10 *
                toBinary(parseInt(decimal_number / 2)));
}

console.log(toBinary(433))

function toBinary(dec){
    let stack = [];
    
    while(dec > 0){
        let d = dec % 2
        stack.push(d);
        dec = parseInt(dec / 2)
    }
    
    let s = ""
    while(stack.length){
        s = s + stack.pop()
    }
    
    return s;
}

console.log(toBinary(1232123))