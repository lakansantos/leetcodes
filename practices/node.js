function ListNode(val, next) {
  this.val = val || 0;
  this.next = next || null;

  ListNode.prototype.getSize = function () {
    let count = 0;
    let node = this;
    while (node) {
      count++;
      node = node.next;
    }

    return count;
  };

  ListNode.prototype.getArray = function () {
    let arr = [];
    let node = this;

    while (node) {
      arr.push(node.val);
      node = node.next;
    }
    return arr;
  };
}

const node1 = new ListNode(1);
const node2 = new ListNode(5);
const node3 = new ListNode(7);
const node4 = new ListNode(7);

node1.next = node2;
node2.next = node3;
node3.next = node4;

console.log(node1.getArray());
console.log(node1.getSize());
