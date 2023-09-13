/*
Given the head of a singly linked list and two integers left and right where left <= right, 
reverse the nodes of the list from position left to position right, and return the reversed list.

Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]
Example 2:

Input: head = [5], left = 1, right = 1
Output: [5]
*/

class ListNode {
    constructor(value) {
      this.value = value;
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

  
  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node5;
  node5.next = node6;
  node6.next = node7;
  let head = node1;


  function reverse(head, left, right){
    let prev = null
    let curr = head

    for (let i = 1; i < left; i++) {
        prev = curr
        curr = curr.next
    }

    const leftConnector = prev
    let newListTail = curr
    // 1 - 2 - 3 - 4 - 5
    console.log(leftConnector)
    for (let i = left; i <= right; i++) {
        const t = curr.next

        curr.next = prev
        prev = curr
        curr = t
    }
    if (leftConnector) {
        leftConnector.next = prev
    } else {
        head = prev
    }

    newListTail.next = curr

    return head
  }
  console.log(reverse(head, 2,4))