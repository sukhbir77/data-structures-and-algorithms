/*
Given the head of a linked list, remove the nth node from the end of the list and return its head.

Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Example 2:
Input: head = [1], n = 1
Output: []

Example 3:
Input: head = [1,2], n = 1
Output: [1]
*/

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const node1 = new ListNode(1);
const node2 = new ListNode(2);
node1.next = node2;
let head = node1;

function deleteNode(head, n) {
  let slow = head;
  let fast = head;
  let length = 0;
  let dummyHead = head;

  // Calculate the length of the linked list
  while (dummyHead) {
    length += 1;
    dummyHead = dummyHead.next;
  }

  // Two Edge Cases
  // When Length of the list is 1
  if (length == 1) {
    return (head = null);
  }
  // When Length is 2 and n is 2
  else if (length == n) {
    return (head = head.next);
  }

  // Move the fast pointer n nodes ahead of the slow Pointer
  for (let i = 1; i < n; i++) {
    fast = fast.next;
  }

  // Keep reference to the node before the node to be removed and a node after.
  let prevNode = head;
  let afterNode = null;

  // Finding the node to be removed
  while (fast && fast.next) {
    prevNode = slow;
    slow = slow.next;
    afterNode = slow.next;
    fast = fast.next;
  }

  prevNode.next = afterNode;

  return head;
}

console.log(deleteNode(head, 2));
