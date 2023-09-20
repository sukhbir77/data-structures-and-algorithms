/*
Given the root of a binary tree, return an array of the largest value in each row of the tree (0-indexed).

Example 1:
Input: root = [1,3,2,5,3,null,9]
Output: [1,3,9]

Example 2:
Input: root = [1,2,3]
Output: [1,3]
*/

function largestValue(root){
    if(root == null) return [];

    let queue = [root];
    let ans = [];

    while(queue.length){
        let newQueue = [];

        let currMax = -Infinity;
        for(let i = 0; i < queue.length; i++){
            let node = queue[i];

            currMax = Math.max(node.val, currMax)
            if(node.left){
                newQueue.push(node.left);
            }

            if(node.right){
                newQueue.push(node.right);
            }
        }

        ans.push(currMax);

        queue = newQueue;
    }

    return ans;
}