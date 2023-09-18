function reverse(head) {
  if (head == null || head.next == null) return head;

  // New Head will be last node in every call stack.
  let newHead = reverse(head.next);
  head.next.next = head;
  head.next = null;

  return newHead;
}
