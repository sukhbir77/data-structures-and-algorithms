/*
Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.

Return the number of good nodes in the binary tree.

Input: root = [3,1,4,3,null,1,5]
Output: 4
Explanation: Nodes in blue are good.
Root Node (3) is always a good node.
Node 4 -> (3,4) is the maximum value in the path starting from the root.
Node 5 -> (3,4,5) is the maximum value in the path
Node 3 -> (3,1,3) is the maximum value in the path.
*/

function goodNode(root){
    let dfs = (node, maxSoFar) => {
        if(node == null) return 0;

        let left = dfs(node.left, Math.max(maxSoFar, node.val))
        let right = dfs(node.right, Math.max(maxSoFar, node.val))
        let ans = left + right;

        if(node.val >= maxSoFar){
            ans += 1
        }

        return ans;
    }

    return dfs(root, root.val);
}