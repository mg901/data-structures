const DoublyLinkedListNode = require('./doubly-linked-list-node');

describe('DoublyLinkedListNode', () => {
  it('should create list node with value', () => {
    const node = new DoublyLinkedListNode(1);

    expect(node.value).toEqual(1);
    expect(node.next).toBeNull();
    expect(node.prev).toBeNull();
  });

  it('should create list node with object as a value', () => {
    const node = new DoublyLinkedListNode({
      value: 1,
      key: 'test',
    });

    expect(node.value.value).toEqual(1);
    expect(node.value.key).toEqual('test');
    expect(node.next).toBeNull();
    expect(node.prev).toBeNull();
  });

  it('should link nodes together', () => {
    const node2 = new DoublyLinkedListNode(2);
    const node1 = new DoublyLinkedListNode(1, node2);
    const node3 = new DoublyLinkedListNode(10, node1, node2);

    expect(node1.next).toBeDefined();
    expect(node1.prev).toBeNull();
    expect(node2.next).toBeNull();
    expect(node2.prev).toBeNull();
    expect(node3.next).toBeDefined();
    expect(node3.prev).toBeDefined();
    expect(node1.value).toEqual(1);
    expect(node1.next.value).toEqual(2);
    expect(node3.next.value).toEqual(1);
    expect(node3.prev.value).toEqual(2);
  });

  it('should convert node to string', () => {
    const node = new DoublyLinkedListNode(1);

    expect(node.toString()).toEqual('1');

    node.value = 'string value';
    expect(node.toString()).toEqual('string value');
  });

  it('should convert node to string with custom stringifier', () => {
    const nodeValue = {
      value: 1,
      key: 'test',
    };

    const node = new DoublyLinkedListNode(nodeValue);
    const toStringCallback = (value) =>
      `value: ${value.value}, key: ${value.key}`;

    expect(node.toString(toStringCallback)).toEqual('value: 1, key: test');
  });
});
