// //function
// const head = require('../head');

// //test code
// head([5,6,7]), 5;
// head(["Hello", "Lighthouse", "Labs"]), "Hello";

const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
});