'use strict';

const _DoubleNode = require('./_DoubleNode.js');

class DoubleLinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
  }

  insertFirst(item) {
    if (this.head === null) {
      this.head = new _DoubleNode(item, null, null);
      this.tail = this.head;
    } else if (this.head.next === null) {
      const currentPointer = this.head;
      this.head = new _DoubleNode(item, currentPointer, null);
      currentPointer.previous = this.head;
      this.tail = currentPointer;
    } else {
      const currentPointer = this.head;
      this.head = new _DoubleNode(item, currentPointer, null);
      currentPointer.previous = this.head;
    }
  }

  insertLast(item) {
    if (this.head === null) {
      this.head = new _DoubleNode(item, null, null);
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }

      currentNode.next = new _DoubleNode(item, null, currentNode);
      this.tail = currentNode.next;
    }
  }

  insertBefore(newItem, targetItem){
    if (this.head === null) {
      throw new Error('Item not found');
    }
    if (this.head.value === targetItem){
      this.insertFirst(newItem);
      return;
    }
    let currentNode = this.head;
    let previousNode; 
    while (currentNode.value !== targetItem){
      previousNode = currentNode;
      currentNode = currentNode.next;
      if (currentNode === null){
        throw new Error('An error has occured :)');
      }
    }
    
    previousNode.next = new _DoubleNode(newItem, currentNode, previousNode);
  }

  insertAfter(newItem, targetItem){
    if (this.head === null) {
      throw new Error('Item not found');
    }
    let currentNode = this.head;
    let nextNode = currentNode.next; 
    while (currentNode.value !== targetItem){
      currentNode = nextNode;
      nextNode = currentNode.next;
      if (currentNode === null){
        throw new Error('An error has occured :)');
      }
    }
    currentNode.next = new _DoubleNode(newItem, nextNode, currentNode);
    if (this.tail === currentNode) {
      this.tail = currentNode.next;
    }
  }

  insertAt(newItem, position) {
    if (this.head === null) {
      throw new Error('Item not found');
    }
    if (position === 1) {
      this.insertFirst(newItem);
      return;
    }
    let currentNode = this.head;
    let previousNode;
    // initialize at 1 to loop through to the end node
    for (let i = 1; i < position; i++) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      if (currentNode === null) {
        throw new Error('An error has occured :)');
      }
    }
    previousNode.next = new _DoubleNode(newItem, currentNode, previousNode);
    if (currentNode === null) {
      this.tail = previousNode.next;
    }
  }
  

  remove(item) {
    if (this.head === null) {
      throw new Error('Item not found');
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    let currentNode = this.head;
    let previousNode;
    while (currentNode.value !== item) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      if (currentNode === null) {
        throw new Error('This item does not exist in this list. You cannot remove what was never there.');
      } 
    }
    previousNode.next = currentNode.next;
    if (currentNode.next === null) {
      this.tail = previousNode.next;
    }
    else {
      currentNode.next.previous = previousNode;
    }
  }

  find(item) {
    if (this.head === null){
      throw new Error('Item not found');
    }
    let currentNode = this.head;
    while (currentNode.value !== item) {
      currentNode = currentNode.next;
      if (currentNode === null) {
        throw new Error('This item is not included in this list');
      }
    }
    return currentNode;
  }
}

const reverseDoublyList = list => {
  if (list.head === null) {
    throw new Error('Cant reverse nothing :(');
  }
  let currentNode = list.head;
  let next;
  let previous;
  while (currentNode !== null) {
    next = currentNode.next;
    previous = currentNode.previous;
    currentNode.next = previous;
    currentNode.previous = next;
    currentNode = next;
  }
  let head = list.head;
  let tail = list.tail;
  list.head = tail;
  list.tail = head;
};

const main = () => {
  const DLL = new DoubleLinkedList();
  DLL.insertFirst('Aquaria');
  DLL.insertFirst('Caprica');
  DLL.insertFirst('Gemenon');
  DLL.insertFirst('Picon');
  DLL.insertFirst('Sagittaron');
  DLL.insertBefore('Tauron', 'Caprica');
  console.log(DLL);
  reverseDoublyList(DLL);
  console.log(DLL);
};

main();