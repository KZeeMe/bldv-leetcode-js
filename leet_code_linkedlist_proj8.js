class LinkedList {
  // This constructor creates a new linked list.
  constructor() {
    this.head = null; // This is the first node in the linked list.
    this.size = 0; // This is the number of nodes in the linked list.
  }

  // This method adds a new node to the linked list.
  add(value) {
    // Create a new node.
    const newNode = {
      value, // The value of the new node.
      next: this.head, // The next node in the linked list.
    };

    // Set the head of the linked list to the new node.
    this.head = newNode;

    // Increment the size of the linked list.
    this.size++;
  }

  // This method searches for a value in the linked list.
  search(value) {
    // Start at the first node in the linked list.
    let currentNode = this.head;

    // While the current node is not null...
    while (currentNode !== null) {
      // If the value of the current node is equal to the value we are searching for...
      if (currentNode.value === value) {
        // Return true.
        return true;
      }

      // Otherwise, move to the next node.
      currentNode = currentNode.next;
    }

    // If we reach the end of the linked list and we haven't found the value...
    return false;
  }
}

// Testing code
const myLinkedList = new LinkedList();
myLinkedList.add(1);
myLinkedList.add(2);
myLinkedList.add(3);

console.log(myLinkedList.search(1)); // true
console.log(myLinkedList.search(4)); // false
