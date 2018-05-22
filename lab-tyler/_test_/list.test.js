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
        it(' should return the updated length of the list', () => {

            let myList = new List();
            myList.push('a');
            myList.push('b');
            myList.push('c');
            myList.pop();

            expect(myList.length).toBe(2);

        });
        it(' should rerturn last item in the list', () => {
            let myList = new List();
            myList.push('a');
            myList.push('b');
            myList.push('c');
            let popReturn = myList.pop();
            expect(popReturn).toEqual('c');
        });
    });
    describe('For Each', () => {
        //     //make a counter to make sure callback function was called the right amount times
        // 
        it(' should return undefined', () => {

            let myList = new List();
            // myList.push('a');
            // myList.push('b');
            // myList.push('c');
            myList.forEach();

            expect(myList.forEach(element => {
                return element;
            })).toBe(undefined);
        });
        it(' should add to the list by applying the function', () => {
            let myList = new List();
            let array2 = new List();;

            myList.push('a');
            myList.push('b');
            myList.push('c');
            myList.forEach(element => {
                array2.push(element + 'b');
            });

            expect(array2[1]).toBe('bb');
        });
    });
    describe('map()', () => {
        it(' should return apply a function and return same list', () => {
            let myList = new List();
            let array3 = new List();

            myList.push('1');
            myList.push('2');
            myList.push('3');
            myList.map(element => {
                array3.push(element + '.14');
            });

            expect(myList[2]).toBe('3.14');
        })
        it(' should return a changed list and apply a function to each element', () => {

            let myList = new List();
            let array3 = new List();

            myList.push('1');
            myList.push('2');
            myList.push('3');
            myList.map(element => {
                array3.push(element + '.14');
            });

            expect(array3[2].toBe('3.14'))


            // let info = myList.map(element => element * 2);

            // expect(info).toBe({'0': 2, '1':4, '2':6, '3':8, 'length':4});
        });
    });
    describe('filter()', () => {
        it(' should return a new array based on function applied', () => {

            let myList = new List();

            myList.push('a');
            myList.push('b');
            myList.push('c');
            let newestList = myList.filter(element => {
                return element.length > 1;
            });

            expect(newestList[1]).toBe(c);
            //  I took b and c from first array;  than choose second indecy from new array for c
        });
      });
})

// //test map
// let list = new List ('apples','bananas');

// list.map(fruit => fruit + ' sauce');

// expect(babyFoods.toArray()).toEqual(['apples sauce','bananas sauce']);

// expect(babyFoods.toEqual(new List(['apples sauce','bananas sauce']));

// describe('For Each', () => {
//     //make a counter to make sure callback function was called the right amount times