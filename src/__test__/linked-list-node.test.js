const { LinkedListNode } = require('../linked-list-node');

describe('LinkedListNode', () => {
  it('should create list node with value', () => {
    const node = new LinkedListNode(1);

    expect(node.value).toEqual(1);
    expect(node.next).toBeNull();
  });

  it('should create list node with object as a value', () => {
    const nodeValue = {
      value: 1,
      key: 'test',
    };
    const node = new LinkedListNode(nodeValue);

    expect(node.value.value).toEqual(1);
    expect(node.value.key).toEqual('test');
    expect(node.next).toBeNull();
  });

  it('should link nodes together', () => {
    const node2 = new LinkedListNode(1);
    const node1 = new LinkedListNode(2, node2);

    expect(node1.next).toBeDefined();
    expect(node2.next).toBeNull();
    expect(node1.value).toEqual(2);
    expect(node1.next.value).toEqual(1);
  });

  it('should convert node to string', () => {
    const node = new LinkedListNode(1);

    expect(node.toString()).toEqual('1');
    node.value = 'string value';
    expect(node.toString()).toEqual('string value');
  });

  it('should convert node to string with custom stringifier', () => {
    const nodeValue = {
      value: 1,
      key: 'test',
    };

    const node = new LinkedListNode(nodeValue);
    const toStringCallback = (value) =>
      `value: ${value.value}, key: ${value.key}`;

    expect(node.toString(toStringCallback)).toEqual('value: 1, key: test');
  });
});
