/*
Basic LinkedList Implementation
*/

class ListNode{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node5 = new ListNode(5)

node1.next = node2;
node2.next = node3;
node3.next = node5;
let head = node1;

console.log(head.value);
console.log(head.next.value);
console.log(head.next.next.value);

// Iterating 
let ans = 0;
while(head){
    ans += head.value;
    head = head.next
}

let addNode = (prevNode, nodeToAdd) => {
    nodeToAdd.next = prevNode.next;
    prevNode.next = nodeToAdd
}

let deleteNode = (prevNode, nodeToDelete) => {
    prevNode.next = nodeToDelete.next
}

const node4 = new ListNode(4);

addNode(node3, node4);

console.log(node3);


function getMiddleNode(head){
    let slow = head;
    let fast = head;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow.value;
}
head = node1;
console.log(head);
console.log(getMiddleNode(head))