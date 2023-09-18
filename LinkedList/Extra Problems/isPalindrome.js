/*

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
//   const node4 = new ListNode(1);
//   const node5 = new ListNode(7);
//   const node6 = new ListNode(8);
//   const node7 = new ListNode(3);
//   const node8 = new ListNode(0);
//   const node9 = new ListNode(9);
//   const node10 = new ListNode(5);

node1.next = node2;
node2.next = node3;
//   node3.next = node4;
//   node4.next = node5;
//   node5.next = node6;
//   node6.next = node7;
//   node7.next = node8;
//   node8.next = node9;
//   node9.next = node10;
let head = node1;

function palindrome(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let prev = null;
  let curr = slow;

  while (curr) {
    let nextNode = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextNode;
  }

  let p1 = head;
  let p2 = prev;

  while (p2) {
    if (p2.val != p1.val) {
      return false;
    }

    p1 = p1.next;
    p2 = p2.next;
  }

  return true;
}

console.log(palindrome(head));
