/*
Given a string s, return the first character to appear twice. It is guaranteed that the input will have a duplicate character.
*/

function firstLetter(str){
        let dic = new Map();

        for(let i = 0; i < str.length; i++){
            if(dic.has(str[i])){
                return str[i]
            }
            dic.set(str[i], i);
        }
}

console.log(firstLetter("abcdeda"));