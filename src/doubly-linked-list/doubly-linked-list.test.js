const DoublyLinkedList = require('./doubly-linked-list');

describe('DoublyLinkedList', () => {
  it('should convert list to array', () => {
    const list = new DoublyLinkedList();
    list.append(1).append(2).append(3);
    expect(list.toArray().toString()).toEqual('1,2,3');
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

  it('should prepend node to list', () => {
    const list = new DoublyLinkedList();

    list.prepend(2);
    expect(list.head.toString()).toEqual('2');
    expect(list.tail.toString()).toEqual('2');

    list.append(1).prepend(3);
    expect(list.head.next.next.prev).toEqual(list.head.next);
    expect(list.tail.prev.next).toEqual(list.tail);
    expect(list.tail.prev.value).toEqual(2);
    expect(list.toString()).toEqual('3,2,1');
  });

  it('should delete node by value from list', () => {
    const list = new DoublyLinkedList();

    expect(list.delete(5)).toBeNull();

    list
      .append(1)
      .append(1)
      .append(2)
      .append(3)
      .append(3)
      .append(3)
      .append(4)
      .append(5);

    expect(list.head.value).toEqual(1);
    expect(list.tail.value).toEqual(5);

    const deletedNode = list.delete(3);
    expect(deletedNode.value).toEqual(3);
    expect(list.tail.prev.prev.value).toEqual(2);
    expect(list.toString()).toEqual('1,1,2,4,5');

    list.delete(3);
    expect(list.toString()).toEqual('1,1,2,4,5');

    list.delete(1);
    expect(list.toString()).toEqual('2,4,5');
    expect(list.head.toString()).toEqual('2');
    expect(list.head.next.next).toEqual(list.tail);
    expect(list.tail.prev.prev).toEqual(list.head);
    expect(list.tail.toString()).toEqual('5');

    list.delete(5);
    expect(list.toString()).toEqual('2,4');
    expect(list.head.toString()).toEqual('2');
    expect(list.tail.toString()).toEqual('4');

    list.delete(4);
    expect(list.toString()).toEqual('2');
    expect(list.head.toString()).toEqual('2');
    expect(list.tail.toString()).toEqual('2');
    expect(list.head).toEqual(list.tail);

    list.delete(2);
    expect(list.toString()).toEqual('');
  });

  it('should convert list to array', () => {
    const list = new DoublyLinkedList();

    expect(list.fromArray([1, 2, 3]).toString()).toEqual('1,2,3');
  });
});
