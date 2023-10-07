/*
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

Example 1:
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

*/
var reverse = (left, right, nums) => {
    while(left < right){
      let temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
      left++;
      right--;
    }
  
    return nums;
  }
  var rotateArray = function(nums, k) {
    k = k % nums.length;
    let left = 0;
    let right = nums.length - 1;
  
    // Reverse the whole array;
    nums = reverse(left, right, nums);

    // Reverse the first part
    left = 0;
    right = k - 1;
    nums = reverse(left, right, nums);

    // Reverse the second Part
    left = k;
    right = nums.length - 1
    nums = reverse(left, right, nums);

  };

rotateArray([1,2,3,4,5,6,7],3);
