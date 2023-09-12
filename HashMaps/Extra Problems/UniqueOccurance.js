/**
 * Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

Example 1:
Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.

Example 2:
Input: arr = [1,2]
Output: false

Example 3:
Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
Output: true
 */

function checkUnique(nums) {
  let dic = new Map();

  for (let num of nums) {
    dic.set(num, (dic.get(num) || 0) + 1);
  }

  let uniqueDic = new Set();
  for (let value of dic.values()) {
    uniqueDic.add(value)
  }

  if (uniqueDic.size == dic.size) {
    return true;
  }
  return false;
}

console.log(checkUnique([-3,0,1,-3,1,1,1,-3,10,0]));
