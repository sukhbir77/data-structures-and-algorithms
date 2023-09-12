/*
Given a binary array nums and an integer goal, return the number of non-empty subarrays with a sum goal.

A subarray is a contiguous part of the array.

Example 1:

Input: nums = [1,0,1,0,1], goal = 2
Output: 4
Explanation: The 4 subarrays are bolded and underlined below:
[1,0,1,0,1]
[1,0,1,0,1]
[1,0,1,0,1]
[1,0,1,0,1]

Example 2:
Input: nums = [0,0,0,0,0], goal = 0
Output: 15
*/

function numberOfSub(nums, k) {
    let counts = new Map();
    counts.set(0, 1);
    let ans = 0, curr = 0;

    for (const num of nums) {
        curr += num;
        ans += counts.get(curr - k) || 0;
        counts.set(curr, (counts.get(curr) || 0) + 1);
    }

    return ans;
}

console.log(numberOfSub([1, 0, 1, 0, 1], 2));
