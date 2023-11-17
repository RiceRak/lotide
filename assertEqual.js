// 1) If the values match, print "Assertion Passed: [actual] === [expected]" values in []
// 2)Otherwise it should, print "Assertion Failed: [actual] !== [expected]" values in []



const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😊Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😢Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual("Shad", 123);
assertEqual("123", 123)
assertEqual(123, 123);
assertEqual("one", 1)