'use strict';

const _Node = require('./_Node.js');

class LinkedList {
  constructor(){
    this.head = null;
  }

  insertFirst(item) {
    if (this.head === null) {

      this.head = new _Node(item, null);
    } else {

      const currentPointer = this.head;
      this.head = new _Node(item, currentPointer);
    }
  }

  insertLast(item) {
    if (this.head === null) {

      this.head = new _Node(item, null);
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
  
        currentNode = currentNode.next;
      }

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
    currentNode.next = new _Node(newItem, nextNode);
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

const display = list => {
  const results = [];
  let currentNode = list.head;
  while (currentNode !== null) {
    results.push(currentNode.value);
    currentNode = currentNode.next;
  }
  return results;
};

const size = list => {
  let counter = 0;
  let currentNode = list.head;
  while (currentNode !== null) {
    currentNode = currentNode.next;
    counter++;
  }
  return counter;
};

const isEmpty = list => {
  if (!list) {
    throw new Error('List not found');
  }
  if (list.head === null) {
    return true;
  }
  return false;
}

const findPrevious = (list, item) => {
  if (list.head === null){
    throw new Error('Item not found');
  }
  if (list.head.value === item) {
    throw new Error('Something has gone wrong');
  }
  let currentNode = list.head;
  let previousNode;
  while (currentNode.value !== item) {
    previousNode = currentNode;
    currentNode = currentNode.next;
    if (currentNode === null) {
      throw new Error('This item is not included in this list');
    }
  }
  return previousNode;
}

const findLast = list => {
  if (list.head === null){
    throw new Error('The list is empty');
  }
  let currentNode = list.head;
  while (currentNode.next !== null) {
    currentNode = currentNode.next;
  }
  return currentNode;
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
  SLL.insertAfter('Hot Dog', 'Helo');
  SLL.insertAt('Kat', 3);
  SLL.insertLast('Tauhida');
  // console.log('before func', display(SLL));
  // WhatDoesThisProgramDo(SLL);
  // console.log('after', display(SLL));
  // console.log(size(SLL));
  // console.log(isEmpty(SLL));
  // console.log(findPrevious(SLL, 'Kat'));
  // console.log(findLast(SLL));
main();

// function that sorts out duplicates
// best-case runtime O(n)
// worst/avg O(n^2);
function WhatDoesThisProgramDo(lst) {
  let current = lst.head;
  while (current !== null) {
    let newNode = current;
    while (newNode.next !== null) {
      if (newNode.next.value === current.value) {
        newNode.next = newNode.next.next;
      }
      else {
        newNode = newNode.next;
      }
    }
    current = current.next;
  }
}
