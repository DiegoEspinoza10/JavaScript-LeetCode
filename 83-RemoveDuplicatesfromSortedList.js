var deleteDuplicates = function(head) {
    if (!head || !head.next) {
        return head; 
    }

    let current = head;
    while (current.next !== null) {
        if (current.val === current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next; 
        }
    }
    return head;
};

//--Tests--
//[1,2]
console.log(deleteDuplicates([1,1,2]));
//[1,2,3]
console.log(deleteDuplicates([1,1,2,3,3]));
//[1,2,3,4]
console.log(deleteDuplicates([1,1,2,3,3,4,4]));