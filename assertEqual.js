// 1) If the values match, print "Assertion Passed: [actual] === [expected]" values in []
// 2)Otherwise it should, print "Assertion Failed: [actual] !== [expected]" values in []
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😊Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😢Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual; // we are not calling the function so we do not use the (), instead we are pointing to the variable "assertEqual"

// TEST CODE -- moved to ./test/assertEqualTest.js
