// Return the sum of all the numbers upto this number.

function sum(num){
    
    if(num <= 1){
        return num;
    }

    return num + sum(num - 1)
}

console.log(sum(10))