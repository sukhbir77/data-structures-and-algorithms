/*
Given a linked list, swap every two adjacent nodes and return its head. 
You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

Input: head = [1,2,3,4]
Output: [2,1,4,3]
Example 2:

Input: head = []
Output: []
Example 3:

Input: head = [1]
Output: [1]

*/

function swapPairs(head) {
  // Check edge case: linked list has 0 or 1 nodes, just return
  if (!head || !head.next) {
    return head;
  }

  let dummy = head.next; // Save the reference to the second node which will become 1st node after swap.
  let prev = null; // To save the reference to the previous node.
  while (head && head.next) {
    if (prev) {
      prev.next = head.next; // Step 4
    }
    prev = head; // Step 3

    let nextNode = head.next.next; // Step 2
    head.next.next = head; // Step 1

    head.next = nextNode; // Step 6
    head = nextNode; // Move to next pair (Step 3)
  }

  return dummy;
}
