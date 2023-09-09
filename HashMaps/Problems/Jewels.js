/*
You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".
*/

function jewels(jewels, stones){
    let dic = new Map();

    for(let c of stones){
        dic.set(c, (dic.get(c) || 0) + 1)
    }

    let ans = 0;
    for(let stone of jewels){
        ans += dic.get(stone) || 0
    }

    return ans;
}

console.log(jewels("z", "ZZ"))