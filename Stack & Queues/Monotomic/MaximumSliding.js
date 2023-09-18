/*
Given an integer array nums and an integer k, there is a sliding window of size k that moves from the very left to the very right.
For each window, find the maximum element in the window.

For example, given nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3, return [3, 3, 5, 5, 6, 7]. 
The first window is [1, 3, -1, -3, 5, 3, 6, 7] and the last window is [1, 3, -1, -3, 5, 3, 6, 7]

Note: this problem is significantly more difficult than any problem we have looked at so far. 
Don't be discouraged if you are having trouble understanding the solution.

*/

var maxSlidingWindow = function(nums, k) {
    let ans = [];
    let queue = [];
    
    for (let i = 0; i < nums.length; i++) {
        // maintain monotonic decreasing.
        // all elements in the deque smaller than the current one
        // have no chance of being the maximum, so get rid of them
        while (queue.length && nums[i] > nums[queue[queue.length - 1]]) {
            queue.pop();
        }
        
        queue.push(i);
        
        // queue[0] is the index of the maximum element.
        // if queue[0] + k == i, then it is outside the window
        if (queue[0] + k == i) {
             queue.shift();
        }
        
        // only add to the answer once our window has reached size k
        if (i >= k - 1) {
            ans.push(nums[queue[0]]);
        }
    }
    
    return ans;
};