/*
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
*/

var deleteDuplicates = function(head) {
    let dummy = new ListNode(0)
    dummy.next = head;
    let prev = dummy, curr = head;
    while (curr) {
        while (curr.next && curr.val == curr.next.val)
            curr = curr.next
        if (prev.next == curr)
            prev = curr
        else
            prev.next = curr.next
        curr = curr.next
    }
    return dummy.next
};