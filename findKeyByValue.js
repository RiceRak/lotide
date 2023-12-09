// takes in an object and a value and returns the first key that corresponds to that value

const findKeyByValue = function(searchObject, searchValue) {
  
  for (const key of Object.keys(searchObject)) {
    if (searchObject[key] === searchValue) {
      return key;
    }
  }
  return undefined;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😊Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😢Assertion Failed: ${actual} !== ${expected}`);
  }
};


const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");

module.exports = findKeyByValue;