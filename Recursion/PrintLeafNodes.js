class Node {
    constructor(val){
        this.val = val;
        this.right = null;
        this.left = null;
    }
}

/**
            100
          /     \      
         /       \
        /         \
      80          110
    /   \         /  \
   70   90      105    120
 */

const root = new Node(100);
// First
const child1 = new Node(80);
const child2 = new Node(110);

root.left = child1;
root.right = child2;

// Second 
const child3 = new Node(70);
const child4 = new Node(90);

child1.left = child3;
child1.right = child4;

// Third
const child5 = new Node(105);
const child6 = new Node(120);
child2.right = child6;
child2.left = child5;


function leafNodes(root){
    if(root == null) return;

    if(root.right == null && root.left == null){
        console.log(root.val);
        return;
    }

    if(root.left !== null){
        leafNodes(root.left);
    }
    if(root.right !== null){
        leafNodes(root.right);
    }
}

leafNodes(root);

function insertNode(head, val){
    console.log(head)
    if(head == null){
        head = new Node(val);
        // newNode.val = val
        return head;
    }
    console.log(head)
    if(head.val < val){
        head.right = insertNode(head.right, val);
    }
    else{
        head.left = insertNode(head.left, val);
    }

    return head;
}

let secondTree = new Node(90);


function createBinaryTree(nums){
    let root = secondTree;
    for(let num of nums){
        root = insertNode(root, num);
    }
}

createBinaryTree([123,32,3,421,432,154,313,45,25,52,21,125,90,89,95]);