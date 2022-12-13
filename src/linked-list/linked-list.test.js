const LinkedList = require('./linked-list');

describe('LinkedList', () => {
  it('should create empty linked list', () => {
    const list = new LinkedList();

    expect(list.toString()).toEqual('');
  });

  it('should prepend no linked list', () => {
    const list = new LinkedList();

    list.prepend(2);

    expect(list.head.toString()).toEqual('2');
    expect(list.tail.toString()).toEqual('2');

    list.append(1).prepend(3);

    expect(list.toString()).toEqual('3,2,1');
  });

  it('should append node to linked list', () => {
    const list = new LinkedList();

    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();

    list.append(1).append(2);

    expect(list.toString()).toEqual('1,2');
    expect(list.tail.next).toBeNull();
  });

  it('should insert node to linked list', () => {
    const list = new LinkedList();

    list.insert(4, 3);
    expect(list.head.toString()).toEqual('4');
    expect(list.tail.toString()).toEqual('4');

    list.insert(3, 2).insert(2, 1).insert(1, -7).insert(10, 9);

    expect(list.toString()).toEqual('1,4,2,3,10');
  });

  it('should delete node by value from linked list', () => {
    const list = new LinkedList();

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

    expect(list.head.toString()).toEqual('1');
    expect(list.tail.toString()).toEqual('5');

    const deletedNode = list.delete(3);
    expect(deletedNode.value).toEqual(3);
    expect(list.toString()).toEqual('1,1,2,4,5');

    list.delete(3);
    expect(list.toString()).toEqual('1,1,2,4,5');

    list.delete(1);
    expect(list.toString()).toEqual('2,4,5');
    expect(list.head.toString()).toEqual('2');
    expect(list.tail.toString()).toEqual('5');

    list.delete(5);
    expect(list.toString()).toEqual('2,4');
    expect(list.head.toString()).toEqual('2');
    expect(list.tail.toString()).toEqual('4');

    list.delete(4);
    expect(list.toString()).toEqual('2');
    expect(list.head.toString()).toEqual('2');
    expect(list.tail.toString()).toEqual('2');

    list.delete(2);
    expect(list.toString()).toEqual('');
  });

  it('should delete linked list tail', () => {
    const list = new LinkedList();

    list.append(1).append(2).append(3);
    expect(list.head.toString()).toEqual('1');
    expect(list.tail.toString()).toEqual('3');

    const deletedNode1 = list.deleteTail();
    expect(deletedNode1.value).toEqual(3);
    expect(list.toString()).toEqual('1,2');
    expect(list.head.toString()).toEqual('1');
    expect(list.tail.toString()).toEqual('2');

    const deletedNode2 = list.deleteTail();
    expect(deletedNode2.value).toEqual(2);
    expect(list.toString()).toEqual('1');
    expect(list.head.toString()).toEqual('1');
    expect(list.tail.toString()).toEqual('1');

    const deletedNode3 = list.deleteTail();
    expect(deletedNode3.value).toEqual(1);
    expect(list.toString()).toEqual('');
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
  });

  it('should delete linked list head', () => {
    const list = new LinkedList();

    expect(list.deleteHead()).toBeNull();

    list.append(1).append(2);
    expect(list.head.toString()).toEqual('1');
    expect(list.tail.toString()).toEqual('2');

    const deletedNode1 = list.deleteHead();
    expect(deletedNode1.value).toEqual(1);
    expect(list.toString()).toEqual('2');
    expect(list.head.toString()).toEqual('2');
    expect(list.tail.toString()).toEqual('2');

    const deletedNode2 = list.deleteHead();
    expect(deletedNode2.value).toEqual(2);
    expect(list.toString()).toEqual('');
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
  });

  it('should be possible to store objects in the list and to print them out', () => {
    const list = new LinkedList();
    const nodeValue1 = {
      value: 1,
      key: 'test1',
    };

    const nodeValue2 = {
      value: 2,
      key: 'test2',
    };

    list.append(nodeValue1).prepend(nodeValue2);

    const nodeStringifier = (value) => `${value.key}:${value.value}`;
    expect(list.toString(nodeStringifier)).toEqual('test2:2,test1:1');
  });
});

// it('should find node by value', () => {
//   const list = new LinkedList();

//   expect(list.find({ value: 5 })).toBeNull();

//   list.append(2).append(3);

//   const node = list.find({ value: 2 });
//   expect(node.value).toEqual(2);
//   expect(list.find({ value: 5 })).toBeNull();
// });

// it('should find to by callback', () => {
//   const list = new LinkedList();

//   list
//     .append({ value: 1, key: 'test1' })
//     .append({ value: 2, key: 'test2' })
//     .append({ value: 3, key: 'test3' });

//   const node = list.find({
//     callback: (value) => value.key === 'test2',
//   });

//   expect(node).toBeDefined();
//   expect(node.value).toEqual(2);
//   expect(node.key).toEqual('test2');
//   expect(
//     list.find({ callback: (value) => value.key === 'test5' }),
//   ).toBeNull();
// });

// it('should create linked list from array', () => {
//   const list = new LinkedList();
//   list.fromArray([1, 1, 2, 3, 3, 3, 4, 5]);

//   expect(list.toString()).toEqual('1,1,2,3,3,3,4,5');
// });

// it('should find node by means custom compare function', () => {
//   const comparator = (a, b) => {
//     if (a.customValue === b.customValue) {
//       return 0;
//     }

//     return a.customValue < b.customValue ? -1 : 1;
//   };

//   const list = new LinkedList(comparator);

//   list
//     .append({ value: 1, customValue: 'test1' })
//     .append({ value: 2, customValue: 'test2' })
//     .append({ value: 3, customValue: 'test3' });

//   const node = list.find({
//     value: { value: 2, customValue: 'test2' },
//   });

//   expect(node).toBeDefined();
//   expect(node.value.value).toEqual(2);
//   expect(node.value.customValue).toEqual('test2');
//   expect(
//     list.find({
//       value: { value: 2, customValue: 'test2' },
//     }),
//   ).toBeNull();
// });

// it('should find preferring callback over compare function', () => {
//   const greaterThan = (value, compareTo) => (value > compareTo ? 0 : 1);

//   const list = new LinkedList(greaterThan);
//   list.fromArray([1, 2, 3, 4, 5]);

//   let node = list.find({ value: 3 });
//   expect(node.value).toEqual(4);

//   node = node.find({ callback: (value) => value < 3 });
//   expect(node.value).toEqual(1);
// });

// it('should convert to array', () => {
//   const list = new LinkedList();

//   list.append(1).append(2).append(3);
//   expect(list.toArray().toString()).toEqual('1,2,3');
// });

// it('should reverse linked list', () => {
//   const list = new LinkedList();

//   // Add test values to linked list
//   list.append(1).append(2).append(3);

//   expect(list.toString()).toEqual('1,2,3');
//   expect(list.head.value).toEqual(1);
//   expect(list.tail.value).toEqual(3);

//   // Reverse linked list
//   list.reverse();
//   expect(list.toString()).toEqual('3,2,1');
//   expect(list.head.value).toEqual(3);
//   expect(list.tail.value).toEqual(1);

//   // Reverse linked list back to initial state
//   list.reverse();
//   expect(list.toString()).toEqual('1,2,3');
//   expect(list.head.value).toEqual(1);
//   expect(list.tail.value).toEqual(3);
// });
