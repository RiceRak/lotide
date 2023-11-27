const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😊Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😢Assertion Failed: ${actual} !== ${expected}`);
  }
};

// aaItems: an array of strings that we need to look through
// itemsCount: an object specifying what to count

const countOnly = function(allItems, itemsToCount) {
  const results = {};
  
  for (const item of allItems) {
    if (itemsToCount[item]) {
      //What code do we want to execute in here?
      //we want to add they key into the results object and start counting how many times that name appears
      //let cookie = undefined
      if (results[item] !== undefined) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
      
    }
    // if (results[item]) {
    //   results[item] += 1;
    // } else {
    //   results[item] = 1;
    // }
    
    
  }
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": true });
console.log(result1);
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 3);
assertEqual(result1["Agouhanna"], 1);