/*
Given two binary search trees root1 and root2, return a list containing all the integers from both trees sorted in ascending order.

Input: root1 = [2,1,4], root2 = [1,0,3]
Output: [0,1,1,2,3,4]

Input: root1 = [1,null,8], root2 = [8,1]
Output: [1,1,8,8]
*/

var getAllElements = function (root1, root2) {
  let dfs = (node, arr) => {
    if (node == null) return;
    dfs(node.left, arr);
    arr.push(node.val);
    dfs(node.right, arr);

    return arr;
  };

  let ans = [];
  let tree1 = dfs(root1, []);
  let tree2 = dfs(root2, []);

  if (tree1 == null) return tree2;
  if (tree2 == null) return tree1;
  let treeOne = 0;
  let treeTwo = 0;

  while (treeOne < tree1.length && treeTwo < tree2.length) {
    if (tree1[treeOne] > tree2[treeTwo]) {
      ans.push(tree2[treeTwo]);
      treeTwo++;
    } else if (tree1[treeOne] == tree2[treeTwo]) {
      ans.push(tree1[treeOne]);
      ans.push(tree2[treeTwo]);
      treeOne++;
      treeTwo++;
    } else {
      ans.push(tree1[treeOne]);
      treeOne++;
    }
  }

  while (treeOne < tree1.length) {
    ans.push(tree1[treeOne]);
    treeOne++;
  }
  while (treeTwo < tree2.length) {
    ans.push(tree2[treeTwo]);
    treeTwo++;
  }

  return ans;
};
