/*
Linked List reversal.
*/

function reverseLinkedList(head){

    let prev = null;
    let curr = head;

    while(curr){
        let nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode
    }

    return prev;
}