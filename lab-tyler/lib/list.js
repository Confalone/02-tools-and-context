'use strict';

class List {

    constructor(array = []) {
        this.length = array.length;
        //want to populate list with item in array
        for (let i = 0; i < array.length; i++) {
            this[i] = array[i];
        }
    }
    push(element) {
        this[this.length++] = element;
        return this.length;
    }
    pop() {
        if (this.length === 0) {
            return undefined;
        }
        let lastI = this[this.length - 1];
        delete this[this.length - 1];
        this.length--;
        return lastI;
    }

    toArray() {
        let array = [];
        //start at 0; finish at end(length)
        for (let i = 0; i < array.length; i++) {
            array[i] = this[i];
        }
        return array;
    }
}
module.exports = List;