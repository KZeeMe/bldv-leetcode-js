// Node class to represent each element of the list
class Node {
  constructor(value) {
    this.value = value; // value of the node
    this.prev = null; // reference to the previous node
    this.next = null; // reference to the next node
  }
}

// DoublyLinkedList class to represent the list
class DoublyLinkedList {
  constructor() {
    this.head = null; // reference to the first node in the list
    this.tail = null; // reference to the last node in the list
    this.length = 0; // number of nodes in the list
  }

  // method to insert a new node at the end of the list
  insert(value) {
    const node = new Node(value);
    if (!this.head) {
      // if list is empty, set new node as head and tail
      this.head = node;
      this.tail = node;
    } else {
      // set new node as the next node of the current tail
      this.tail.next = node;
      // set the current tail as the previous node of the new node
      node.prev = this.tail;
      // set the new node as the new tail
      this.tail = node;
    }
    // increment the length of the list
    this.length++;
  }

  // method to delete a node with the given value from the list
  delete(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        if (currentNode === this.head) {
          // if the node to delete is the head, set the next node as the new head
          this.head = currentNode.next;
          // set the previous reference of the new head to null
          if (this.head) {
            this.head.prev = null;
          }
        } else if (currentNode === this.tail) {
          // if the node to delete is the tail, set the previous node as the new tail
          this.tail = currentNode.prev;
          // set the next reference of the new tail to null
          if (this.tail) {
            this.tail.next = null;
          }
        } else {
          // if the node to delete is in the middle of the list
          currentNode.prev.next = currentNode.next;
          currentNode.next.prev = currentNode.prev;
        }
        // decrement the length of the list

        this.length--;
        break; // stop searching
      }
      currentNode = currentNode.next;
    }
  }

  // method to search for a node with the given value and return it
  search(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null; // node not found
  }
}

// Testing code
const list = new DoublyLinkedList();
console.log(list); // DoublyLinkedList { head: null, tail: null, length: 0 }

list.insert(5);
list.insert(10);
list.insert(15);
console.log(list); // DoublyLinkedList { head: Node { value: 5, prev: null, next: Node { value:
//10, prev: [Node], next: [Node] } }, tail: Node { value: 15, prev: [Node], next: null }, length: 3 }

list.delete(10);
console.log(list); // DoublyLinkedList
