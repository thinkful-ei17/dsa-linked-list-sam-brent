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

  insertLast() {

  }

  remove() {

  }
  find() {

  }
}

const main = () => {
  const test = new LinkedList();
  console.log(test.insertFirst(3));
  console.log(test.insertFirst(100));

}

main();