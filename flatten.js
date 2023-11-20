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

const flatten = function(arr) {
  let flattened = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      const flattenedNest = flatten(arr[i]);
      flattened = flattened.concat(flattenedNest);
    } else {
      flattened.push(arr[i]);
    }
  }
  return flattened;
};



 
console.log(flatten([1, 2, [3, 4], 5, [6]]));
console.log(flatten([1, 2, [3, 4], 5, [6], 7, [8, 9, 10, 11, [12]]]));