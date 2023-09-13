class ListNode {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(5);

// Node 1
node1.next = node2;

// Node 2
node2.next = node3;
node2.prev = node1;

// Node 3
node3.next = node4;
node3.prev = node2;

// Node 4
node4.next = node5;
node4.prev = node3;

// Node 5
node5.prev = node4;

let head = node1;


let addNode = (node, nodeToAdd) => {
    let prev = node.prev;

    nodeToAdd.next = node;
    nodeToAdd.prev = prev;

    prevNode.next = nodeToAdd;
    node.prev = nodeToAdd;
 }

 let deleteNode = (node) => {
    let prevNode = node.prev;
    let nextNode = node.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
 }