// 1. Create a function that takes a string as a parameter and returns the string with the first
// character of each word changed into a capital letter, as in the example below. Test it with
// different strings.

console.log(ucFirstLetters("los angeles") ) //Los Angeles

function ucFirstLetters(inputString) {
  const words = inputString.split(" ");
  const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  const resultString = capitalizedWords.join(" ");
  return resultString;
}
