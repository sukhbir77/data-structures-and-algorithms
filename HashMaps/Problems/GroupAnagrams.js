/* 
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:
Input: strs = [""]
Output: [[""]]

Example 3:
Input: strs = ["a"]
Output: [["a"]]
*/

function groupAnagram(strs){
    let dic = new Map();

    for(let str of strs){
        let sortedString = str.split("").sort().join("");
        if(!dic.has(sortedString)){
            dic.set(sortedString, [])
        }
        dic.get(sortedString).push(str);
    }

    let ans = []
    for(let [key, value] of dic){
        ans.push(value)
    }

   return ans;
}

console.log(groupAnagram(["eat","tea","tan","ate","nat","bat"]))