// // FUNCTION IMPLEMENTATION
// const eqArrays = function(array1, array2) {
//   if (array1.length !== array2.length) return false;
//   let result = [];
//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] === array2[i]) {
//       result.push(array1[i]);
//     }
//   }
//   if (result.length === array1.length) return true;

//   return false;
// };
const eqArrays = require ('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// TEST CODE
// assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
// assertArraysEqual([1, 2, 3], [3, 2, 1]);// => false
// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);// => true
// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);// => false

module.exports = assertArraysEqual;