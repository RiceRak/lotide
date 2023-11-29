/* Our map function will take in two arguments:
1) An array to map
2) A callback function*/

const words = ["Keyboard", "Chair", "Table", "Window", "Balloon", "Door"];
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

const assertArrayEqual = function(given, needed) {
  const arraysEqual = eqArrays(given, needed);
  if (arraysEqual) {
    console.log(`😊Assertion Passed: [${given}] === [${needed}]`);
  } else {
    console.log(`😢Assertion Failed: [${given}] !== [${needed}]`);
  }
};
const map = function(array, callback) {
const results = [];
  for (let item of array) {
results.push(callback(item));
 }
return results;
}

const result1 = map(words, word => word[0]);
console.log(result1);

assertArrayEqual(result1, [ 'K', 'C', 'T', 'W', 'B', 'D' ]);