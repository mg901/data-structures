class DoublyLinkedListNode {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }

  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}

module.exports = DoublyLinkedListNode;
