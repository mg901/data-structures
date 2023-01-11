const DoublyLinkedList = require('./doubly-linked-list');

describe('DoublyLinkedList', () => {
  it('should convert list to array', () => {
    const list = new DoublyLinkedList();
    list.append(1).append(2).append(3);
    expect(list.toArray().toString()).toBe('1,2,3');
  });

  it('should create empty linked list', () => {
    const list = new DoublyLinkedList();

    expect(list.toString()).toEqual('');
  });

  it('should append node to linked list', () => {
    const list = new DoublyLinkedList();
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();

    list.append(1).append(2);
    expect(list.head.next.value).toEqual(2);
    expect(list.tail.prev.value).toEqual(1);
    expect(list.toString()).toEqual('1,2');
  });
});
