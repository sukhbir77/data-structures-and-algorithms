/*
Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

Example 1:
Input: pattern = "abba", s = "dog cat cat dog"
Output: true

Example 2:
Input: pattern = "abba", s = "dog cat cat fish"
Output: false

Example 3:
Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false
*/

function checkIf(pattern, str) {
  let pMap = new Map();
  let s = str.split(" ");
  let sMap = new Map();

  if(pattern.length !== s.length) return false;

  for (let i = 0; i < pattern.length; i++) {
    char1 = pattern[i];
    char2 = s[i];

    if(!pMap.has(char1) && !sMap.has(char2)){
        pMap.set(char1, char2);
        sMap.set(char2, char1);
    }
    else if(pMap.get(char1) !== char2 || sMap.get(char2) !== char1){
        return false;
    }
  }
  return true;
}

console.log(checkIf("abba", "dog constructor constructor dog"));
