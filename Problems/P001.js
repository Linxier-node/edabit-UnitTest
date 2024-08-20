/*
[1] Return Types

Create a function that takes an array and returns the types of values (data types) in a new array.
*/

const list = [1, 2, 'ahmed', { name: 'sayed' }, false];

// const arrayValuesTypes = (arr) => {
//   const result = [];
//   for (let i in arr) {
//     result.push(typeof arr[i]);
//   }
//   return result;/*

const arrayValuesTypes = (arr) => arr.map((i) => typeof i);

module.exports = arrayValuesTypes;
