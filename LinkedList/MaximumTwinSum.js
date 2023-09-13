/*
In a linked list of size n, where n is even, the ith node (0-indexed) of the linked list is known as the twin of the (n-1-i)th node, if 0 <= i <= (n / 2) - 1.

For example, if n = 4, then node 0 is the twin of node 3, and node 1 is the twin of node 2. These are the only nodes with twins for n = 4.
The twin sum is defined as the sum of a node and its twin.

Given the head of a linked list with even length, return the maximum twin sum of the linked list.

*/

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const node1 = new ListNode(1);
const node2 = new ListNode(100000);
const node3 = new ListNode(2);
const node4 = new ListNode(1);

node1.next = node2;
node2.next = node3;
node3.next = node4;
let head = node1;

function twinSum(head) {
  // Find the Middle of the Linked List
  let slow = head;
  let fast = head;
  let prev = head;

  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  // Reverse the linked list at the middle of the LL
  let reverseHead = slow;
  let prevNode = null;

  while (reverseHead) {
    let nextNode = reverseHead.next;
    reverseHead.next = prevNode;
    prevNode = reverseHead;
    reverseHead = nextNode;
  }

  
  prev.next = prevNode;

  // Use two pointer to add the values.
  slow = head;
  fast = prevNode;

  let ans = 0;

  while (fast) {
    ans = Math.max(ans, slow.value + fast.value);
    slow = slow.next;
    fast = fast.next;
  }

  return ans;
}

console.log(twinSum(head)); 
