/*
Get the next greater element for every array element.

Input: nums = [2, 7, 3, 5, 4, 6, 8]
Output: [7, 8, 5, 6, 6, 8, -1]

*/

function nextGreat(temperatures){
    let stack = [];
    let answer = new Array(temperatures.length).fill(-1);
    
    for (let i = 0; i < temperatures.length; i++) {
        console.log(stack);
        while (stack.length && temperatures[stack[stack.length - 1]] < temperatures[i]) {
            let j = stack.pop();
            console.log("i is equal to " + temperatures[i]);
            answer[j] = temperatures[i];
        }
        console.log(stack);
        stack.push(i);
    }
    
    return answer;
}


console.log(nextGreat([2, 7, 3, 5, 4, 6, 8]));