class LinkedList {
  constructor() {
    this.head = null;
  }

  // add a new node to the end of the list
  add(value) {
    const newNode = new Node(value);

    // if list is empty, set head to new Node
    if (!this.head) {
      this.head = newNode;
      return;
    }

    //find the last node in the list
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    // set the new node as the last node's next
    currentNode.next = newNode;
  }

  // remove the first node with the given value
  remove(value) {
    if (!this.head) {
      return;
    }
    // if head node has the value, update head to the next node
    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }

    // find the ndoe with the value and remove it
    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next;
        return;
      }
      currentNode = currentNode.next;
    }
  }

  //find the first node with the given value and return it
  search(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  //print list in the console
  print() {
    let currentNode = this.head;
    const values = [];
    while (currentNode) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(values.join(" -> "));
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Example usage
const linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.print(); // expect " 1 -> 2 -> 3"
linkedList.remove(2);
linkedList.print(); // expect " 1 -> 3"
console.log(linkedList.search(1));
console.log(linkedList.search(2));
