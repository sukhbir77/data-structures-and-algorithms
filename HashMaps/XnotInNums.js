/*
Given an integer array nums, find all the numbers x in nums that satisfy the following: x + 1 is not in nums, and x - 1 is not in nums.
*/

function findNumbers(nums){
    let numsSet = new Set(nums);
    let ans = []

    for(let i =0; i < nums.length; i++){
        if(!numsSet.has(nums[i] - 1) && !numsSet.has(nums[i] + 1)){
            ans.push(nums[i])
        }
    }

    return ans;
}

console.log(findNumbers([1,2,3,4,5,7]))