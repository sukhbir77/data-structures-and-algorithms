
function insertNode(head, val){
    if(head = null){
        head = new Node();
        newNode.val = val
        return head;
    }

    if(head.val < data){
        head.right = insertNode(head.right, val);
    }
    else{
        head.left = insertNode(head.left, val);
    }

    return head;
}