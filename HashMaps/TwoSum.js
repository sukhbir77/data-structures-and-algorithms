/*

Given an array of integers nums and an integer target, return indices of two numbers such that they add up to target. You cannot use the same index twice.

*/

function twoSum(nums, target){
    let dic = new Map();

    for(let i=0; i < nums.length; i++){
        let num = nums[i]
        let diff = target - num
        if(dic.has(diff)){
            return [i, dic.get(diff)]
        }

        dic.set(num, i)
        console.log(dic)
    }
    
    return [-1, -1]
}

console.log(twoSum([5,2,7,10,3,9], 8))