const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😊Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😢Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  let letterCount = {};
  
  for (const letter of sentence) {
    if (letter !== " ") {
      if (!letterCount[letter]) {
        letterCount[letter] = 1;
      } else {
        letterCount[letter] += 1;
      }
    }
  }
  return letterCount;
};

const result = countLetters('lighthouse in the house');
assertEqual(result['h'], 4);
assertEqual(result['e'], 3);
console.log(countLetters("lighthouse in the house"));