/*

*/

class ListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  const node1 = new ListNode(1);
  const node2 = new ListNode(2);
//   const node3 = new ListNode(6);
//   const node4 = new ListNode(6);
//   const node5 = new ListNode(7);
//   const node6 = new ListNode(8);
//   const node7 = new ListNode(3);
//   const node8 = new ListNode(0);
//   const node9 = new ListNode(9);
//   const node10 = new ListNode(5);
  
  node1.next = node2;
//   node2.next = node3;
//   node3.next = node4;
//   node4.next = node5;
//   node5.next = node6;
//   node6.next = node7;
//   node7.next = node8;
//   node8.next = node9;
//   node9.next = node10;
  let head = node1;

  function swapElements(head, n){
    let firstNode = head;
    let prevFirst = null;
    let length = 0

    let curr = head;
    while(curr){
        length += 1;
        curr = curr.next;
    }

    if(length == 1){
        return head;
    }

    for(let i = 1; i < n; i++){
        prevFirst = firstNode;
        firstNode = firstNode.next;
    }
    let fast = firstNode;
    let secondElement = head;
    let prevSecond = fast;

    while(fast && fast.next){
        prevSecond = secondElement;
        secondElement = secondElement.next;
        fast = fast.next;
    }

    console.log(firstNode.value, secondElement.value);

    let temp = firstNode.value;
    firstNode.value = secondElement.value;
    secondElement.value  = temp;
    

    // if(prevSecond == firstNode){
    //     let third = secondElement.next;
    //     secondElement.next = firstNode;
    //     prevFirst.next = secondElement;

    //     firstNode.next = third;
    // }
    // else{
    //     // Setting the Fist Element
    //     let third = secondElement.next;
    //     prevFirst.next = secondElement;
    //     secondElement.next = firstNode.next;
    
    //     prevSecond.next = firstNode;
    //     firstNode.next = third;
    // }


    return head;
  }

  swapElements(head, 1);