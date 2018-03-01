'use strict';

const _Node = require('./_Node.js');

class LinkedList {
  constructor(){
    this.head = null;
  }

  insertFirst(item) {
    if (this.head === null) {
      console.log('head is null');
      this.head = new _Node(item, null);
    } else {
      console.log('head is not null');
      const currentPointer = this.head;
      this.head = new _Node(item, currentPointer);
    }
  }

  insertLast(item) {
    if (this.head === null) {
      console.log('head is null insertLast');
      this.head = new _Node(item, null);
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        console.log('once through the while loop');
        currentNode = currentNode.next;
      }
      console.log('setting the new node at', currentNode);
      currentNode.next = new _Node(item, null);
    }
  }

  remove(item) {
    let currentNode = this.head;
    let previousNode;
    while (currentNode.value !== item) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      if (currentNode === null) {
        throw new Error('This item does not exist in this list. You cannot remove what was never there.');
      } 
    }
    console.log(currentNode, 'was removed');
    previousNode.next = currentNode.next;
  }

  find(item) {
    let currentNode = this.head;
    while (currentNode.value !== item) {
      currentNode = currentNode.next;
      if (currentNode === null) {
        throw new Error('This item is not included in this list');
      }
    }
    return currentNode.value;
  }
}

const main = () => {
  const SLL = new LinkedList();
  SLL.insertFirst('Apollo');
  SLL.insertFirst('Boomer');
  SLL.insertFirst('Helo');
  SLL.insertFirst('Husker');
  SLL.insertFirst('Starbuck');
  SLL.insertLast('Tauhida');
  SLL.remove('squirrel');
};

main();