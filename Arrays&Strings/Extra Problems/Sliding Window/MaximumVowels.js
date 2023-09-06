/*
Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

 

Example 1:
Input: s = "abciiidef", k = 3
Output: 3
Explanation: The substring "iii" contains 3 vowel letters.

Example 2:
Input: s = "aeiou", k = 2
Output: 2
Explanation: Any substring of length 2 contains 2 vowels.

Example 3:
Input: s = "leetcode", k = 3
Output: 2
Explanation: "lee", "eet" and "ode" contain 2 vowels.
*/

var vowels = /[aeiou]/;
function MaximumVowels(s, k) {
  let numOfVowels = 0;
  let left = 0;
  let ans = 0;

  for (let right = 0; right < s.length; right++) {
    if (vowels.test(s[right])) {
      numOfVowels += 1;
    }

    if (right - left + 1 > k) {
      if (vowels.test(s[left])) {
        numOfVowels -= 1;
      }
      left += 1;
    }
    ans = Math.max(ans, numOfVowels);

    if (ans === k) return ans;
  }

  return ans;
}

console.log(MaximumVowels("novowels", 1));
