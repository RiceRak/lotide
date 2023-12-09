// takes in 2 values and returns true if they are equal and false otherwise

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😊Assertion Passed: ${actual} === ${expected}`);
    return true;
  } else {
    console.log(`😢Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
};

module.exports = assertEqual;