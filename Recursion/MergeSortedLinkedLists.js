function sortedMerge (A, B){
    if(A == null) return B;
    if(B == null) return A;

    if(A.value < B.value){
        A.next = sortedMerge(A.next, B);
        return A;
    }
    else{
        B.next = sortedMerge(A, B.next)
        return B
    }
}