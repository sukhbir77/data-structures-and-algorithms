/*
Given the root of a binary tree, return the sum of values of its deepest leaves.

Example 1:
Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
Output: 15

Example 2:
Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
Output: 19
*/

function deepestSum(root){
    if(root == null) return 0;

    let queue = [root];
    let ans = 0;

    while(queue.length){
        ans = 0;
        let newQueue = [];

        for(let i = 0; i < queue.length; i++){
            let node = queue[i]

            ans += node.val;

            if(node.left){
                newQueue.push(node.left);
            }

            if(node.right){
                newQueue.push(node.right);
            }
        }
        queue = newQueue;
    }

    return ans;
}