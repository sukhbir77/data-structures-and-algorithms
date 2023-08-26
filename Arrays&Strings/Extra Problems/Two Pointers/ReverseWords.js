/*
Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order. 

Example 1:
Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"

Example 2:
Input: s = "God Ding"
Output: "doG gniD"
 
*/

function reverseOnlyWords(str) {
  let arrWords = str.split(" ");

  for (let i = 0; i < arrWords.length; i++) {
    let arrWord = arrWords[i].split("");
    let left = 0;
    let right = arrWord.length - 1;

    while (left < right) {
      let temp = arrWord[right];
      arrWord[right] = arrWord[left];
      arrWord[left] = temp;
      left++;
      right--;
    }
    arrWords[i] = arrWord.join("");
  }

  return arrWords.join(" ");
}

console.log(reverseOnlyWords("God Ding"));
