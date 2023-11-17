const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😊Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😢Assertion Failed: ${actual} !== ${expected}`);
  }
};

// createa function called "head"
// the head function should NOT return the first element as an array. It should return just the element.
// an emtpy array should return undefined

function head(actual) {
  if (actual.length === 0) {
    return undefined;
  }   
 return actual[0];
}


assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");