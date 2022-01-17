// FUNCTION IMPLEMENTATION
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

// const assertEqual = require('./assertEqual');

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) return false;
  let result = [];
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      result.push(array1[i]);
    }
  }
  if (result.length === array1.length) return true;

  return false;
};


// TEST CODE
// console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1]));// => false
// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));// => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));// => false
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

module.exports = eqArrays