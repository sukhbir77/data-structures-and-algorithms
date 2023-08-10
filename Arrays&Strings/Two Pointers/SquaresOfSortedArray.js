/**
 Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
 */

function squareSorted(nums){
    let left = 0;
    let right = nums.length - 1;
    let sortedNew = Array(nums.length).fill(0);

    for(let i = nums.length - 1; i >=0 ; i--){
        if(Math.abs(nums[left]) < Math.abs(nums[right])){
            sortedNew[i] = nums[right] * nums[right]
            right--;
        }
        else{
            sortedNew[i] = nums[left] * nums[left]
            left++
        }
    }
    return sortedNew;
}

console.log(squareSorted([-4,-1,0,3,10]))