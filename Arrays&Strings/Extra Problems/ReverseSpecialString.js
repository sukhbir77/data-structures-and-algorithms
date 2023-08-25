/*
Given a string s, reverse the string according to the following rules:

All the characters that are not English letters remain in the same position.
All the English letters (lowercase or uppercase) should be reversed.
Return s after reversing it.

Example 1:
Input: s = "ab-cd"
Output: "dc-ba"

Example 2:
Input: s = "a-bC-dEf-ghIj"
Output: "j-Ih-gfE-dCba"

Example 3:
Input: s = "Test1ng-Leet=code-Q!"
Output: "Qedo1ct-eeLg=ntse-T!"
 */

const regex = /^[a-zA-Z]$/
function reverseString(str){
    let reverseString = ''
    let left = 0;
    let right = str.length - 1

    while(left <= str.length - 1){
        if(regex.test(str[left]) && regex.test(str[right]) ){
            reverseString += str[right]
            left++
            right--
        }       
        else if(regex.test(str[left]) == false && regex.test(str[right]) == true ) {
            reverseString += str[left]
            left++
        }
        else if(regex.test(str[left]) == false && regex.test(str[right]) == false ){
            reverseString += str[left]
            left++
            right--
        }
        else if(regex.test(str[left]) == true && regex.test(str[right]) == false){
            right--
        }
    }
    return reverseString;
}

function reverseStringv2(s){
    let output = '';
    let left = 0;
    let right = s.length - 1;
    
    while (left < s.length) {
        if (!regex.test(s[right]) && right >= 0) {
            right--;
            continue;
        }
        if (regex.test(s[left])) {
            output += s[right];
            right--;
        } else {
            output += s[left];
        }
        left++;
    }
    
    return output;
}

reverseString("Test1ng-Leet=code-Q!")

