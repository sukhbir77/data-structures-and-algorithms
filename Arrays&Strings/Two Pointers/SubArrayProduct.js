/*
Given an array of positive integers nums and an integer k, return the number of subarrays 
where the product of all the elements in the subarray is strictly less than k.

For example, given the input nums = [10, 5, 2, 6], k = 100, the answer is 8. 
The subarrays with products less than k are:

[10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
 */

function subArrayProduct(arr, k){
    let left = 0;
    let product = 1
    let answer = 0

    for(let right = 0; right < arr.length; right++){
        product *= arr[right]
        
        while(product >= k)
        {
            product /= arr[left]
            left++
        }

        answer += right - left + 1
    }
    return answer;
}

console.log(subArrayProduct([10, 5, 2, 6], 100))