/*
Find if the string is palindrome.
*/

function palindrome(str){
    if(str.length == 1){
        return true;
    }

    console.log(str);

    if(str.charAt(0) === str.charAt(str.length - 1)){
        return palindrome(str.substring(1, str.length - 1))
    }
    
    return false;
}

console.log(palindrome("racecar"))