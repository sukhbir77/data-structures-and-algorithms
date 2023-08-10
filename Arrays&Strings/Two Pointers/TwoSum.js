/*
Example 2: Given a sorted array of unique integers and a target integer, 
return true if there exists a pair of numbers that sum to target, 
false otherwise. This problem is similar to Two Sum. (In Two Sum, the input is not sorted).

For example, given nums = [1, 2, 4, 6, 8, 9, 14, 15] and target = 13, return true because 4 + 9 = 13.
*/

function isSumExists(nums, target){
    let left = 0;
    let right = nums.length - 1 

    while(left < right){
        if(nums[left] + nums[right] == target){
            return true;
        }
        if(nums[left] + nums[right] > target){
            right--;
        }
        else{
            left++;
        }
    }
    return false;
}

console.log(isSumExists([1, 2, 4, 6, 8, 9, 14, 15], 13));