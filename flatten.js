const assertArraysEqual = function(given, needed) {
    const arraysEqual = eqArrays(given, needed);
    if (arraysEqual) {
      console.log(`😊Assertion Passed: [${given}] === [${needed}]`);
    } else {
      console.log(`😢Assertion Failed: [${given}] !== [${needed}]`);
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
  


  const flatten = function(arr){
    let flattenedArray = [];

    for (let i = 0; i < arr.length; i++) {
        // if (Array.isArray(arr[i])) {
          flattenedArray.push(arr[i]);
        // }
  }
  console.log(flattenedArray);
  }
  flatten([1, 2, [3, 4], 5, [6]])