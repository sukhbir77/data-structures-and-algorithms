/*
Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

The first node is considered odd, and the second node is even, and so on.

Note that the relative order inside both the even and odd groups should remain as it was in the input.

You must solve the problem in O(1) extra space complexity and O(n) time complexity.

*/

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(5);
const node6 = new ListNode(6);
const node7 = new ListNode(7);
const node8 = new ListNode(8);
const node9 = new ListNode(9);
const node10 = new ListNode(10);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;
node7.next = node8;
node8.next = node9;
node9.next = node10;
let head = node1;

function evenOdd(head) {
    if(head == null) return null;
    if(head.next == null) return head;
    if(head.next.next == null) return head;
  
    let oddPtr = head;
    let evenPtr = head.next;
  
    let evenStartPtr = head.next;
    let prevPointer = null;
  
    while (evenPtr && evenPtr.next) {
      oddPtr.next = evenPtr.next;
      evenPtr.next = evenPtr.next.next;
  
      oddPtr = oddPtr.next;
      prevPointer = oddPtr;
      evenPtr = evenPtr.next;
    }
  
    prevPointer.next = evenStartPtr;
  
    return head;
  
}

evenOdd(head);

while(head){
    console.log(head.val);
    head = head.next;
}
