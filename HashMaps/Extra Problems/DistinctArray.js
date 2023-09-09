/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
*/

function checkIf(nums){
    let dic = new Map();

    for(let num of nums){
        if(dic.has(num)){
            return true;
        }
        dic.set(num, 1);
    }

    return false
}