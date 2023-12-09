# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @srl-rak/lotide`

**Require it:**

`const _ = require('@srl-rak/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: finds the head of an array
* `tail(...)`: finds the tail of an array
* `middle(...)`: finds the middle element of an array
* `assertArraysEqual(...)`: asserts if two arrays are equal
* `assertEqual(...)`: asserts if two values are equal
* `assertObjectsEqual(...)`: asserts if two objects are equal
* `countLetters(...)`: counts and tracks how many times a letter is used in an argument
* `countOnly(...)`: counts how many times a string shows up in an argument
* `eqArrays(...)`: counts if an array has the same length
* `eqObjects(...)`: examines two objects to see if they are the same
* `findKey(...)`: finds the key in an object if given the properties in a nest object
* `findKeyByValue(...)`: finds the key in an object if given the properties
* `flatten(...)`: takes a nested array and returns a single array with each element in order
* `letterPositions(...)`: finds the positions of a letter in a string and returns an array with positions
* `map(...)`: returns a map of first letters of an array of strings
* `takeUntil(...)`: takes the data in a given array and returns a new array only until the value that is in the argument
* `without(...)`: returns a new array after looking at a given array without the value that is in the argument