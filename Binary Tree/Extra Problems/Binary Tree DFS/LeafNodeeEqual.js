/*
Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence.

For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).
Two binary trees are considered leaf-similar if their leaf value sequence is the same.

Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.

Input: root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
Output: true

Input: root1 = [1,2,3], root2 = [1,3,2]
Output: false

*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    let dfs = (node) => {
        if(node == null) return;

        if(node.left == null && node.right == null){
            ans.push(node.val);
        }
        dfs(node.left);
        dfs(node.right);
    }
    let ans = []
    dfs(root1);
    dfs(root2);
    let left = 0;
    let right;
    for(right = (ans.length / 2) ; right < ans.length; right++){
        if(ans[left] !== ans[right]){
            return false;
        }
        left++;
    }

    if(right - left !== Math.round(ans.length / 2)){
        return false;
    }

    return true;
};