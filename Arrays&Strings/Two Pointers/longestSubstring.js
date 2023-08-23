/*
Example 2: You are given a binary string s (a string containing only "0" and "1"). 
You may choose up to one "0" and flip it to a "1". What is the length of the longest 
substring achievable that contains only "1"?

For example, given s = "1101100111", the answer is 5. If you perform the flip at index 2, 
the string becomes 1111100111.
*/

function longestValidSubstring(s){
    var left =  0;
    var numberOfZeros = 0;
    var currentLength = 0

    for(var right = 0; right < s.length; right++){
        if(s[right] === "0"){
            numberOfZeros += 1
        }

        while(numberOfZeros > 1){
            if(s[left] == "0"){
                numberOfZeros -= 1
            }
            left++
        }
        currentLength = Math.max(currentLength, right - left + 1)
    }

    return currentLength;
}

console.log(longestValidSubstring("1101100111"));