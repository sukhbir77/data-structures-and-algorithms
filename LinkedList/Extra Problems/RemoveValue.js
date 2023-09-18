/*
Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

Example 1:
Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]

Example 2:
Input: head = [], val = 1
Output: []

Example 3:
Input: head = [7,7,7,7], val = 7
Output: []

*/

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const node1 = new ListNode(1);
const node2 = new ListNode(0);
const node3 = new ListNode(1);
const node4 = new ListNode(1);
const node5 = new ListNode(7);
const node6 = new ListNode(8);
const node7 = new ListNode(3);
const node8 = new ListNode(0);
const node9 = new ListNode(9);
const node10 = new ListNode(5);

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

function removeElements(head, val) {
  let dummy = new ListNode(0);
  dummy.next = head;

  let curr = head;
  let prev = dummy;

  while (curr) {
    if (curr.val == val) {
      prev.next = curr.next;
    }
    else{
        prev = prev.next;
    }
    curr = curr.next;
  }

  return dummy.next;
}

console.log(removeElements(head, 1));
