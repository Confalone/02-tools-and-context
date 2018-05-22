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

    // toArray() {
    //     let array = [];
    //     //start at 0; finish at end(length)
    //     for (let i = 0; i < array.length; i++) {
    //         array[i] = this[i];
    //     }
    //     return array;
    // }
    forEach(element2) {
        for (let i = 0; i < this.length; i++) {
            element2(this[i]);
        }
        
        return undefined;
    }
    map(element3) {
        let mapped = new List;
        for(let i = 0; i < this.length; i++) {
            mapped[i] = element3(this[i]);
            mapped.length++;
        }
        if(!element3) {
            return undefined;
        }
        return mapped;
    }
    filter(element4) {
        let array = this;
        let filterd =[];
        for(let i = 0; i < array.length; i++) {
            if (element4(array[i]))filterd.push(array[i]);
        }
        return filterd;
    }
}
module.exports = List;