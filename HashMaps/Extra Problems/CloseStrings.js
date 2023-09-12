/*
Two strings are considered close if you can attain one from the other using the following operations:

Operation 1: Swap any two existing characters.
For example, abcde -> aecdb
Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
You can use the operations on either string as many times as necessary.

Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

Example 1:
Input: word1 = "abc", word2 = "bca"
Output: true
Explanation: You can attain word2 from word1 in 2 operations.
Apply Operation 1: "abc" -> "acb"
Apply Operation 1: "acb" -> "bca"

Example 2:
Input: word1 = "a", word2 = "aa"
Output: false
Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.

Example 3:
Input: word1 = "cabbba", word2 = "abbccc"
Output: true
Explanation: You can attain word2 from word1 in 3 operations.
Apply Operation 1: "cabbba" -> "caabbb"
Apply Operation 2: "caabbb" -> "baaccc"
Apply Operation 2: "baaccc" -> "abbccc"
*/

function checkIf(word1, word2){
    if(word1.length != word2.length) return false;
    if(word1 == word2) return true;
    const map1 = new Map()
    const map2 = new Map()
    
    // Adding occurance of each character in the maps.
    word1.split('').forEach(item=>map1.set(item, (map1.get(item)||0)+1))
    word2.split('').forEach(item=>map2.set(item, (map2.get(item)||0)+1))
    
    // Check if they both have characters needed to make string.
    for(let [key, value]  of map2){
        if(!map1.has(key)) return false
    }

    // Array to store the sorted character occurances
    let arr1 = [...map1.values()].sort((a,b)=>a-b);
    let arr2 = [...map2.values()].sort((a,b)=>a-b);
    
    // Check if each occurance is similar in both words
    for(let i=0; i<arr1.length; i++){
        if(arr1[i] != arr2[i]) return false;
    }
    return true;
}

console.log(checkIf("aaabbbbccddeeeeefffff", "aaaaabbcccdddeeeeffff"))