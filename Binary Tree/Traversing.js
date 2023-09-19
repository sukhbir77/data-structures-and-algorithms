/*
Traversing through binary tree using recursion
*/

function traverse(root){
    if( root == null)
    {
        return;
    }

    traverse(root.left);
    traverse(root.right);

    return;
}