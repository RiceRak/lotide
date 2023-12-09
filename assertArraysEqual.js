// prints a pass or fail message after comparing two arrays for matching

const eqArrays = require("./eqArrays");

const assertArraysEqual = function(given, needed) {
  const arraysEqual = eqArrays(given, needed);
  if (arraysEqual) {
    console.log(`😊Assertion Passed: [${given}] === [${needed}]`);
  } else {
    console.log(`😢Assertion Failed: [${given}] !== [${needed}]`);
  }
};

module.exports = assertArraysEqual;