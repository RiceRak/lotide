const assertArraysEqual = function(given, needed) {
  const arraysEqual = eqArrays(given, needed);
  if (arraysEqual) {
    console.log(`😊 Assertion Passed: [${given}] === [${needed}]`);
  } else {
    console.log(`😢 Assertion Failed: [${given}] !== [${needed}]`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const middle = function(arr) {
  let midElement = [];
  let midIndex = 0;
  if (arr.length % 2 === 0) {
    midIndex = Math.floor(arr.length / 2);
    midElement.push(arr[midIndex - 1]);
    midElement.push(arr[midIndex]);
  } else {
    midIndex = Math.floor(arr.length / 2);
    midElement.push(arr[midIndex]);
  }
  return midElement;
};
console.log(middle([1, 2, 3, 4, 5, 6, 7]));
console.log(middle([1, 2, 3, 4, 5, 6]));
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
 