//piece of data - val
//reference to next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    //create new node
    let newNode = new Node(val);
    
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    } else {
      this.tail.next = newNode; //add on to current tail
      this.tail = newNode; //create new tail
      this.length++;
    }
    return this; //returns list
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    } else {
        let current = this.head; //start at beginning of list
        let newTail = current;
        while (current < current.next) { //loop until current is set to second to last node
          newTail = current;
          current = current.next //sets current to next node;
        }
          this.tail = newTail;
          this.tail.next = null;
          this.length--;
          //length of 1 edge case
          if (this.length === 0) {
            this.head = null;
            this.tail = null;
          }
          return current;
    }
  }

  shift() {
    if (this.length === 0) {
      return undefined;
    }
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    return currentHead;
  }

  unshift() {
    
  }

}

// let first = new Node('Hi');
// first.next = new Node('there');
// first.next.next = new Node('how');
// first.next.next.next = new Node('are');
// first.next.next.next.next = new Node('you');

let list = new SinglyLinkedList()