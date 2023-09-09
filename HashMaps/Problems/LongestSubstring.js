/**=
 * Given a string s, find the length of the longest substring without repeating characters.
 */


function findSubstring(str){
    let dic = new Map();
    let left = 0, ans = 0; 

    for(let right = 0; right < str.length; right++){
        if(dic.has(str[right])){
            while(dic.has(str[right])){
                dic.set(str[left], dic.get(str[left]) - 1)
                if(dic.get(str[left]) == 0){
                    dic.delete(str[left])
                }
                left++;
            }
        }
        dic.set(str[right], (dic.get(str[right]) || 0) + 1);
        ans = Math.max(ans, right - left + 1)
    }

    return ans;
}

console.log(findSubstring("pwwkew"))