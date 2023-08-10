/*
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.
*/

function reverse(str){
    let left = 0;
    let right = str.length - 1 
    while(left < right){
        let temp = str[left];
        str[left] = str[right]
        str[right] = temp;
        left++;
        right--;
    }
    return str;
}

console.log(reverse(["h","e","l","l","o"]))