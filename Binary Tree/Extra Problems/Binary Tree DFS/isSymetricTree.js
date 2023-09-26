/*
Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

Input: root = [1,2,2,3,4,4,3]
Output: true

Input: root = [1,2,2,null,3,null,3]
Output: false
*/

var isSymmetric = function (root) {
  let dfs = (p, q) => {
    if (p == null && q == null) return true;
    if (p == null || q == null) return false;

    if (p.val !== q.val) {
      return false;
    }

    let left = dfs(p.left, q.right);
    let right = dfs(p.right, q.left);

    return left && right;
  };

  return dfs(root.left, root.right);
};
