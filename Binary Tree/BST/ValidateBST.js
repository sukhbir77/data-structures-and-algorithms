/*
Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left 
subtree
 of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.

*/
var isValidBST = function(root) {
    let dfs = (node, small, large) => {
        if (!node) {
            return true;
        }
        
        if (small >= node.val || node.val >= large) {
            return false;
        }
        
        // Update the large value for left subtrees and Vice Versa.
        let left = dfs(node.left, small, node.val);
        let right = dfs(node.right, node.val, large);
        
        // tree is a bst if left and right subtrees are also BSTs
        return left && right;
    }
    
    return dfs(root, -Infinity, Infinity);
};