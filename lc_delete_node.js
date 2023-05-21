class Node {
  constructor(number) {
    this.number = number;
    this.next = null;
  }
}

function push(head, number) {
  const node = new Node(number);
  node.next = head;
  head = node;
  return head;
}

function deleteNode(head, position) {
  let temp = head;
  let prev = head;

  for (let i = 0; i < position; i++) {
    if (i === 0 && position === 1) {
      haed = head.next;
      temp = null;
    } else {
      if (i === position - 1 && temp) {
        prev.next = temp.next;
        temp = null;
      } else {
        prev = temp;

        if (prev === null) {
          break;
        }
        temp = temp.next;
      }
    }
  }
  return head;
}

function printList(head) {
  while (head) {
    if (head.next === null) {
      console.log(`[${head.number}] [${head}->(nil)]`);
    } else {
      console.log(``);
    }
  }
}
