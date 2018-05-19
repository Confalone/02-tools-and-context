'use strict';

class List {

  constructor() {
    this.length = 0;
  }
  push(element) {
    this[this.length++] = element;
    return this.length;
  }
  pop(element) {
    this[this.length.pop] = element;
    return this.length;
  }
  
}

module.exports = List;