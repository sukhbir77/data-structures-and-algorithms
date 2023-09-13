/*
Example 1: Given the head of a linked list with an odd number of nodes head, return the value of the node in the middle.

For example, given a linked list that represents 1 -> 2 -> 3 -> 4 -> 5, return 3.

*/

function getMiddleNode(head){
    let slow = head;
    let fast = head;

    while(fast && fast.next){
        slow = head.next;
        fast = fast.next.next;
    }

    return slow.value;
}