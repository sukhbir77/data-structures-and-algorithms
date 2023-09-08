/*
Given an integer array nums, return the largest integer that only occurs once. If no integer occurs once, return -1.

Input: nums = [5,7,3,9,4,9,8,3,1]
Output: 8
Explanation: The maximum integer in the array is 9 but it is repeated. The number 8 occurs only once, so it is the answer.

Input: nums = [9,9,8,8]
Output: -1
Explanation: There is no number that occurs only once.
*/

function largestInteger(nums){
    let dic = new Map();
    for(let num of nums){
        dic.set(num, (dic.get(num) || 0) + 1)
    }

    let ans = -1

    for(let [key, value] of dic){
        if(value === 1){
            ans = Math.max(ans, key)
        }
    }

    return ans;
}

console.log(largestInteger([9,9,8,8]))