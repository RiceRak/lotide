// takes in a sentence and returns a count of each of the letters in the sentence

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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😊Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😢Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = countLetters;




const result = countLetters('lighthouse in the house');
assertEqual(result['h'], 4);
assertEqual(result['e'], 3);
console.log(countLetters("lighthouse in the house"));