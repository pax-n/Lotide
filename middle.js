// TEST/ASSERTION FUNCTIONS
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



// const assertArraysEqual = function(actual, expected) {
//   if (eqArrays(actual, expected) === true) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const assertArraysEqual = require('./assertArraysEqual');

// ACTUAL FUNCTION
const middle = function (array) {
  let result = [];
  let firstMiddle = "";
  let secondMiddle = "";
  if (array.length <= 2) {
    return result = [];
  } 
  else if (array.length % 2 === 0) {
    firstMiddle = array.length / 2;
    secondMiddle = array.length / 2 + 1;
    result.push(firstMiddle);
    result.push(secondMiddle);
  }
  else if (array.length % 2 === 1) {
    firstMiddle = array.length / 2;
    result.push(Math.ceil(firstMiddle));
  }
  return result;
}

// TEST CODE

// middle([1]) // => []
// middle([1, 2]) // => []
// middle([1, 2, 3]) // => [2]
// middle([1, 2, 3, 4, 5]) // => [3]
// middle([1, 2, 3, 4]) // => [2, 3]
// middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

module.exports = middle;

