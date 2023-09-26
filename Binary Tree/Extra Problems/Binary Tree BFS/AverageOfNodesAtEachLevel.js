/*
Given the root of a binary tree, return the average value of the nodes on each level in the form of an array. 
Answers within 10-5 of the actual answer will be accepted.

Input: root = [3,9,20,null,null,15,7]
Output: [3.00000,14.50000,11.00000]
Explanation: The average value of nodes on level 0 is 3, on level 1 is 14.5, and on level 2 is 11.
Hence return [3, 14.5, 11].

Input: root = [3,9,20,15,7]
Output: [3.00000,14.50000,11.00000]

*/

var averageOfLevels = function(root) {
    let queue = [root];
    let ans = []

    while(queue.length){
        let nextQueue = [];

        let average = 0;
        for(let i = 0; i < queue.length; i++){
            let node = queue[i];

            average += node.val;
            (node.left && nextQueue.push(node.left));
            (node.right && nextQueue.push(node.right));
        }

        ans.push(average/queue.length);
        queue = nextQueue;
    }


    return ans;
};