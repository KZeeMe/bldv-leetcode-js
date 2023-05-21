let delNode = function (node) {
  // use the next Node's data and replace the next node's data with that
  node.val = node.next.val;

  // change current node's next to next.next

  node.next = node.next.next;
};
