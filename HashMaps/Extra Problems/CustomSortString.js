/*
You are given two strings order and s. All the characters of order are unique and were sorted in some custom order previously.

Permute the characters of s so that they match the order that order was sorted. More specifically, if a character x occurs before a character y in order, then x should occur before y in the permuted string.

Return any permutation of s that satisfies this property.

Example 1:
Input: order = "cba", s = "abcd"
Output: "cbad"
Explanation: 
"a", "b", "c" appear in order, so the order of "a", "b", "c" should be "c", "b", and "a". 
Since "d" does not appear in order, it can be at any position in the returned string. "dcba", "cdba", "cbda" are also valid outputs.

Example 2:
Input: order = "cbafg", s = "abcd"
Output: "cbad"

*/

function customSort(order, s) {
  let dic = new Map();
  let ans = [];

  // Setting the frequency of characters in the string;
  for (let c of s) {
    dic.set(c, (dic.get(c) || 0) + 1);
  }

  // For pushing the Characters in the order in the ans array
  for (let i = 0; i < order.length; i++) {
    if (dic.has(order[i])) {
      while (dic.get(order[i]) != 0) {
        ans.push(order[i]);
        dic.set(order[i], dic.get(order[i]) - 1);
      }
    }
  }

  // For pushing the remaining characters
  for (let [key, value] of dic) {
    while (value > 0) {
      ans.push(key);
      value--;
    }
  }

  return ans.join("");
}

console.log(customSort("cba", "abcd"));
