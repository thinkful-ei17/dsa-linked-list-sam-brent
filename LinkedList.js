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
    
    previousNode.next = new _Node(newItem, currentNode);
  }

  insertAfter(){

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
    // initialize at 0 to loop through to the end node
    for (let i = 1; i < position; i++) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      if (currentNode === null) {
        throw new Error('An error has occured :)');
      }
    }
    previousNode.next = new _Node(newItem, currentNode);
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
    console.log(currentNode, 'was removed');
    previousNode.next = currentNode.next;
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

const main = () => {
  const SLL = new LinkedList();
  SLL.insertFirst('Apollo');
  SLL.insertFirst('Boomer');
  SLL.insertFirst('Helo');
  SLL.insertFirst('Husker');
  SLL.insertFirst('Starbuck');
  SLL.insertLast('Tauhida');
  SLL.insertBefore('Athena', 'Boomer');
};

main();
