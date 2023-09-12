/*
Given an array of integers arr, a lucky integer is an integer that has a frequency in the array equal to its value.

Return the largest lucky integer in the array. If there is no lucky integer return -1.

Example 1:
Input: arr = [2,2,3,4]
Output: 2
Explanation: The only lucky number in the array is 2 because frequency[2] == 2.

Example 2:
Input: arr = [1,2,2,3,3,3]
Output: 3
Explanation: 1, 2 and 3 are all lucky numbers, return the largest of them.

Example 3:
Input: arr = [2,2,2,3,3]
Output: -1
Explanation: There are no lucky numbers in the array.
*/

function luckyInteger(nums) {
  let dic = new Map();

  for (let num of nums) {
    dic.set(num, (dic.get(num) || 0) + 1);
  }

  let ans = -1;

  for (let [key, value] of dic) {
    if (key == value) {
      ans = Math.max(ans, key);
    }
  }

  return ans;
}

console.log(luckyInteger([1, 2, 2, 3, 3, 3]));
