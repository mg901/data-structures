const DoublyLinkedListNode = require('../doubly-linked-list-node');
const Comparator = require('../comparator');

class DoublyLinkedList {
  /**
   * @param {Function} [comparatorFunction]
   */
  constructor(comparatorFunction) {
    /** @var DoublyLinkedListNode */
    this.head = null;
    /** @var DoublyLinkedListNode */
    this.tail = null;
    this.compare = new Comparator(comparatorFunction);
  }

  /**
   * @return {DoublyLinkedListNode[]}
   */
  toArray() {
    const nodes = [];
    let currentNode = this.head;

    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  /**
   *
   * @return {string}
   */
  toString() {
    return this.toArray().toString();
  }

  /**
   *
   * @param {*} value
   * @return {DoublyLinkedList}
   */
  append(value) {
    const newNode = new DoublyLinkedListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    // Attach new node to the end of list
    this.tail.next = newNode;
    newNode.prev = this.tail;

    this.tail = newNode;

    return this;
  }

  /**
   *
   * @param {*} value
   * @return {DoublyLinkedList}
   */
  prepend(value) {
    const newNode = new DoublyLinkedListNode(value, this.head);

    if (this.head) {
      this.head.prev = newNode;
    }

    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  /**
   *
   * @param {*} value
   * @return {DoublyLinkedListNode}
   */
  delete(value) {
    if (!this.head) {
      return null;
    }

    let deletedNode = null;
    let currentNode = this.head;

    while (currentNode) {
      if (this.compare.equal(currentNode.value, value)) {
        deletedNode = currentNode;

        if (deletedNode === this.head) {
          // If HEAD going to be deleted...
          this.head = deletedNode.next;

          if (this.head) {
            this.head.prev = null;
          }

          if (deletedNode === this.tail) {
            this.tail = null;
          }
        } else if (deletedNode === this.tail) {
          // If TAIL going to be deleted...
          this.tail = deletedNode.prev;
          this.tail.next = null;
        } else {
          // If MIDDLE node is going to be deleted...
          const prevNode = deletedNode.prev;
          const nextNode = deletedNode.next;

          prevNode.next = nextNode;
          nextNode.prev = prevNode;
        }
      }
      currentNode = currentNode.next;
    }

    return deletedNode;
  }

  /**
   * @param {*[]} Array of values that need to be converted to doubly linked list.
   * @return {DoublyLinkedList}
   */
  fromArray(array) {
    array.forEach((value) => {
      this.append(value);
    });

    return this;
  }
}

module.exports = DoublyLinkedList;
