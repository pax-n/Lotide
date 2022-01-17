# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @pax-n/lotide`

**Require it:**

`const _ = require('@pax-n/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head()`: function to return the first item in an array.
* `tail()`: function to return the items following the first item in 
* `middle()`: function to return the middle values of an array.
* `assertArraysEqual()`: function to assert that two arrays are equal.
* `assertEqual()`: function to assert that two values are equal.
* `assertObjectsEqual()`: function to evaluate objects if they are equal.
* `countLetters()`: function to count the number of letters in a string.
* `countOnly()`: function to only count a specific item in a string.
* `eqArrays()`: function to compare two arrays and determine if they are equal.
* `eqObjects()`: function to compare two objects and determine if they are equal.
* `findKey()`: function to find a key in an object.
* `findKeyByValue ()`: function to find a key that matches the given value. 
* `letterPositions ()`: function to return the positions of letters in a string.
* `map()`: function to show the array index of a searched value. 
* `takeUntil()`: function will keep collecting items from a provided array until the callback provided returns a truthy value.
* `without()`: function that compares two arrays and outputs the array value is not in both arrays.