/**nums = [2, 3, 7, 11, 5, 17, 19] */

function convert(nums){
    let stack = [];

    for(let i = 0; i < nums.length; i++){
        while(stack.length && stack[stack.length - 1] > nums[i]){
            stack.pop();
        }

        stack.push(nums[i])
    }
    
    return stack;
}

console.log(convert([2, 3, 7, 11, 5, 17, 19]))