const { LinkedListNode } = require('./linked-list-node');

exports.LinkedList = class LinkedList {
  /**
   *
   * @param {Function} [comparatorFunction]
   */
  constructor(comparatorFunction) {
    /** @var LinkedListNode */
    this.head = null;

    /** @var LinkedListNode */
    this.tail = null;
    this.compare = comparatorFunction;
  }

  /**
   * @param {*} value
   * @return {LinkedList}
   */
  prepend(value) {
    // Make new node to be head
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;

    // If there is no tail yet let's make new node a tail
    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  /**
   * @param {*} value
   * @return {LinkedList}
   */
  append(value) {
    const newNode = new LinkedListNode(value);

    // If there is no head yet let's make new node a head
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    // Attach new node to the end of linked list
    this.tail.next = newNode;
    this.tail = newNode;

    return this;
  }

  toArray() {
    const nodes = [];
    let currentNode = this.head;

    while (currentNode) {
      nodes.push(currentNode);

      currentNode = currentNode.next;
    }

    return nodes;
  }

  toString() {
    return this.toArray()
      .map((node) => node.toString())
      .toString();
  }
};
