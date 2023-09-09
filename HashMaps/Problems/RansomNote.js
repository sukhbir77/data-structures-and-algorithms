/*
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
*/

function ransom(ransomNote, magazine){
    let dic = new Map();

    for(const c of magazine){
        dic.set(c, (dic.get(c) || 0) + 1)
    }

    for(let i=0; i < ransomNote.length; i++){
        if(dic.has(ransomNote[i])){
            dic.set(ransomNote[i], dic.get(ransomNote[i]) - 1)
            if(dic.get(ransomNote[i]) == 0){
                dic.delete(ransomNote[i])
            }
        }
        else{
            return false;
        }
    }

    return true
}

console.log(ransom("aa", "aab"))