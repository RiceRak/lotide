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

const without = function(source, remove) {
  let newArr = [];
  let numberToRemoved = false;
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < remove.length; j++) {
      if (source[i] === remove[j]) {
        numberToRemoved = true;
      }
    }
    if (numberToRemoved === false) {
      newArr.push(source[i]);
    }
    numberToRemoved = false;
  }
  return newArr;
};

const assertArraysEqual = function(given, needed) {
  const arraysEqual = eqArrays(given, needed);
  if (arraysEqual) {
    console.log(`😊Assertion Passed: [${given}] === [${needed}]`);
  } else {
    console.log(`😢Assertion Failed: [${given}] !== [${needed}]`);
  }
};

console.log(without([1, 2, 3, 1, 2, 4, 6, 1, "1"], [3, 1]));
console.log(without(["1", "2", "3"], [1, 2, "3"])); 

// //Test Case
// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// //assertArraysEqual(words, ["hello", "world", "lighthouse"]);
