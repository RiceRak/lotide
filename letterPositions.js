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

const letterPositions = function(sentence) {
  let results = {};
  for (let i = 0; i < sentence.length; i++) {
    const element = sentence[i];
    if (element !== " ") {
      if (!results[element]) {
        results[element] = [i];
      } else {
        results[element].push(i);
      }
    }
  }
  return results;
};

assertArrayEqual(letterPositions("hello").l, [2, 3]);