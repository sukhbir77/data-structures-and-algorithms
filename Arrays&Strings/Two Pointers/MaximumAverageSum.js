/*
You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average 
value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
*/

function MaximumAverageSum(nums, k){
    let left = 0;
    let averageSum = 0;
    let answer = 0

    for(let right = 0; right < nums.length; right++){
        if(right +  1 > k){
            averageSum -= nums[left]
            left++
        }
        averageSum += nums[right]
        answer = Math.max(answer, averageSum / k)
    }

    return answer;
}

console.log(MaximumAverageSum([5], 1))