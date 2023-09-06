/*
Given a 2D integer array nums where nums[i] is a non-empty array of distinct positive integers, 
return the list of integers that are present in each array of nums sorted in ascending order.

Example 1:
Input: nums = [[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]
Output: [3,4]
Explanation: 
The only integers present in each of nums[0] = [3,1,2,4,5], nums[1] = [1,2,3,4], and nums[2] = [3,4,5,6] are 3 and 4, so we return [3,4].

Example 2:
Input: nums = [[1,2,3],[4,5,6]]
Output: []
Explanation: 
There does not exist any integer present both in nums[0] and nums[1], so we return an empty list [].
*/

function intersection(nums){
    let dic = new Map();

    for(let i = 0; i< nums.length; i++){
        for(let j = 0; j < nums[i].length; j++){
            console.log(nums[i][j])
            if(dic.has(nums[i][j])){
                let increment = dic.get(nums[i][j]) + 1
                dic.set(nums[i][j],  increment)
            }
            else{
                dic.set(nums[i][j], 1)
            }
        }
    }

    let ans= []

    for(let [key, value] of dic){
        if(value === nums.length){
            ans.push(key);
        }
    }

    return ans.sort((a,b) => a - b)
}

console.log(intersection([[4,43,15,30,27,22],[15,30,43,27,10,4]]))