/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
Input: nums = [0]
Output: [0]
*/

function moveZeros(arr) {
  let left = 0;
  let right = 1;

  while (right < arr.length) {
    if (arr[left] != 0) {
      left++;
      right++;
    } else {
      if (arr[right] != 0) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp; 
        left++;
      }
      right++;
    }
  }

  return arr;
}

console.log(moveZeros([1,0, 1]));
