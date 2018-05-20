'use strict';


let List = require('../lib/list.js');

describe('List Module', () => {

    describe('push()', () => {

        it(' should return the updated length of the list', () => {

            let myList = new List();
            myList.push('FOO');

            expect(myList.length).toBe(1);

        });

        it(' should add an element to the list', () => {
            let myList = new List();
            myList.push('foo');

            expect(myList[myList.length - 1]).toEqual('foo');
        });
    })
    describe('pop()', () => {
        it('pop() returns the updated length of the list', () => {

            let myList = new List();
            myList.push('a');
            myList.push('b');
            myList.push('c');
            myList.pop();

            expect(myList.length).toBe(2);

        });
it('pop() rerturns last list item', () => {
    let myList = new List();
    myList.push('a');
    myList.push('b');
    myList.push('c');
    let popReturn = myList.pop();
    expect(popReturn).toEqual('c');
});
});
});


// //test map
// let list = new List ('apples','bananas');

// list.map(fruit => fruit + ' sauce');

// expect(babyFoods.toArray()).toEqual(['apples sauce','bananas sauce']);

// expect(babyFoods.toEqual(new List(['apples sauce','bananas sauce']));

// describe('For Each', () => {
//     //make a counter to make sure callback function was called the right amount times
// }