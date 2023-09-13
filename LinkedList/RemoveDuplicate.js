/*
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
*/

var deleteDuplicates = function(head) {
    let dummy = head
   while(dummy != null && dummy.next != null ){
       if(dummy.next.val == dummy.val){
           dummy.next = dummy.next.next
       }else{
       dummy = dummy.next
       }
       
   }
   
   return head
};