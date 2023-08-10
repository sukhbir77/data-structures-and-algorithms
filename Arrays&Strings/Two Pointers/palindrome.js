/*
Example 1: Given a string s, return true if it is a palindrome, false otherwise.

A string is a palindrome if it reads the same forward as backward. That means, after 
reversing it, it is still the same string. For example: "abcdcba", or "racecar".
 */

function isPalindrome(str){
    let left = 0
    let right = str.length - 1

    while(left < right){
        if(str[left] !== str[right])
        {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

console.log(isPalindrome("abc"));