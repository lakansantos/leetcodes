// Definition for singly-linked list node
function ListNode(val) {
  this.val = val;
  this.next = null;
}

// Function to merge two sorted linked lists
var mergeTwoLists = function (l1, l2) {
  if (!l1) return l2;
  else if (!l2) return l1;
  else if (l1.val <= l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);

    return l1;
  } else if (l2.val < l1.val) {
    l2.next = mergeTwoLists(l1, l2.next);

    return l2;
  }
};

// Create linked lists
const list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(4);

const list2 = new ListNode(1);
list2.next = new ListNode(3);
list2.next.next = new ListNode(4);

// Call the mergeTwoLists function with the created lists
const mergedList = mergeTwoLists(list1, list2);

function printLinkedList(node) {
  let current = node;
  let arr = [];
  while (current !== null) {
    arr.push(current.val);
    current = current.next;
  }

  return arr;
}

// console.log(printLinkedList(mergedList));
console.log(printLinkedList(mergedList));

// Print the merged list
