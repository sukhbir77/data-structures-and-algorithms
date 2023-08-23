/*
Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
*/

function MaximumConsecutiveOnes(nums, k){
    let currZeros = 0; let left=0; let ans = 0;
    
    for(let right = 0; right < nums.length; right++){
        if(nums[right] == 0){
            currZeros++
        }
        
        while(currZeros > k){
            if(nums[left] == 0){
                currZeros--
            }
            left++
        }
        
        ans = Math.max(ans, right - left + 1)
    }
  return ans
}

console.log(MaximumConsecutiveOnes([1,1,1,0,0,0,1,1,1,1,0], 2))