// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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


const letterPositions = function(sentence) {

  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]] = [i]
    }
    else {
      results[sentence[i]] = [i]
    }
  }
  return results;
};


console.log(letterPositions("hello"))