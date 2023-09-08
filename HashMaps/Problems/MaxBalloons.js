/*
Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

You can use each character in text at most once. Return the maximum number of instances that can be formed.

Input: text = "nlaebolko"
Output: 1

Input: text = "loonbalxballpoon"
Output: 2

Input: text = "leetcode"
Output: 0
*/

function maxBalloons(str) {
  let dic = new Map();

  for (let c of str) {
    dic.set(c, (dic.get(c) || 0) + 1);
  }

  return Math.floor(Math.min(
    dic.get("b"),
    dic.get("a"),
    dic.get("l") / 2,
    dic.get("o") / 2,
    dic.get("n")
  )) || 0
}

console.log(maxBalloons("loonbalxballpoon"));
