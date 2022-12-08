const { LinkedListNode, LinkedList } = require('./linked-list');

describe('LinkedListNode', () => {
  const node = new LinkedListNode(1);
  test('returns correct value', () => {
    expect(node.value).toEqual(1);
  });

  test('returns default next node', () => {
    expect(node.next).toBeNull();
  });

  test('returns correct value from toString method', () => {
    expect(node.toString()).toEqual('1');
  });
});

describe('LinkedList', () => {
  test('returns the default values for the head and tail props', () => {
    const list = new LinkedList();

    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
  });

  describe('append method', () => {
    test('returns correct head and tail if append one node', () => {
      const list = new LinkedList();
      const node = {
        value: 1,
        next: null,
      };

      expect(list.append(1)).toEqual({
        head: node,
        tail: node,
      });
    });

    test('returns list with multiple nodes', () => {
      const list = new LinkedList();

      list.append(1).append(2);
      expect(list).toMatchSnapshot();
    });
  });

  test('toArray method', () => {
    const list = new LinkedList();

    list.append(1).append(2);
    expect(list.toArray()).toMatchSnapshot();
  });

  test('toString method', () => {
    const list = new LinkedList();

    list.append(1).append(2);

    expect(list.toString()).toEqual('1,2');
  });
});
