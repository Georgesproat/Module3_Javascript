// 1. Create a function that takes a string as a parameter and returns the string with the first
// character of each word changed into a capital letter, as in the example below. Test it with
// different strings.

console.log(ucFirstLetters("los angeles")); //Los Angeles

function ucFirstLetters(inputString) {
  const words = inputString.split(" ");
  const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  const resultString = capitalizedWords.join(" ");
  return resultString;
}

// 2. Create a function truncate(str, max) that truncates a given string of text if its total
// length is greater than the max length. It should return either the truncated text, with an
// ellipsis (...) added to the end if it was too long, or the original text otherwise.
// b) Write another variant of the truncate function that uses a conditional operator.

function truncate(str, max) {
  if (str.length > max) {
    return str.slice(0, max - 3) + "...";
  }
  return str;
}

function truncate2(str, max) {
  return str.length > max ? str.slice(0, max - 3) + "..." : str;
}

const truncate3 = (str, max) =>
  str.length > max ? str.slice(0, max - 3) + "..." : str;

console.log(truncate("This text will be truncated if it is too long", 15));
console.log(truncate2("This text will be truncated if it is too long", 20));
console.log(truncate3("This text will be truncated if it is too long", 25));

// 3. Use the following animals array for the below tasks. Test each one by printing the result to
// the console. Review the following link for tips:

// https://developer.mozilla.org/en-
// US/docs/Web/JavaScript/Reference/Global_Objects/Array

// a) Add 2 new values to the end
// b) Add 2 new values to the beginning
// c) Sort the values alphabetically
// d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the
// middle of the animals array with newValue
// e) Write a function findMatchingAnimals(beginsWith) that returns a new array
// containing all the animals that begin with the beginsWith string. Try to make it work
// regardless of upper/lower case.

const animals = ["Tiger", "Giraffe"];
animals.push("Elephant", "Lion");
animals.unshift("Gazelle", "Leopard");
animals.sort();
console.log(animals);

function replaceMiddleAnimal(newValue) {
  const middleIndex = Math.floor(animals.length / 2);

  animals[middleIndex] = newValue;
}

replaceMiddleAnimal("Cheetah");
console.log(animals);
// even number of animals in an array makes this so much harder lol

function findMatchingAnimals(beginsWith) {
  const beginsWithLowerCase = beginsWith.toLowerCase();
  return animals.filter((animal) =>
    animal.toLowerCase().startsWith(beginsWithLowerCase)
  );
}

console.log(findMatchingAnimals("ti"));

// 4. Write a function camelCase(cssProp) that changes dash-separated CSS properties like
// 'margin-left' into camel-cased 'marginLeft'.
// The function should remove all dashes, and uppercase the first letter of each word after a
// dash.
// b) Create variants of the camelCase function that use different types of for loops, and
// c) with and without the conditional operator.

console.log(camelCase("margin-left")); // marginLeft
console.log(camelCase("background-image")); // backgroundImage
console.log(camelCase("display")); // display

function camelCase(cssProp) {
  const words = cssProp.split("-");
  const capitalizedWords = words.map((word, index) => {
    if (index === 0) {
      return word;
    } else {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
  });
  return capitalizedWords.join("");
}

// 5. Decimal number operations in JavaScript can lead to unexpected results, as in the
// following:
let twentyCents = 0.2;
let tenCents = 0.1;
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`);
// 0.2 + 0.1 = 0.30000000000000004
// We can sometimes avoid this using the toFixed function to force the number of decimal
// places as below, but it’s not always useful:
let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen); //why is this not working?
// it changes them to strings and they dont add numerically, they add like 0.200.10
// b) Create a function currencyAddition(float1, float2) which safely adds the two
// decimal numbers float1 and float2 and returns the correct float result.
function currencyAddition(float1, float2) {
  const result = (
    Number(float1.toFixed(2)) + Number(float2.toFixed(2))
  ).toFixed(2);
  return parseFloat(result);
}

console.log(currencyAddition(twentyCents, tenCents));

// c) Create a function currencyOperation(float1, float2, operation) which
// safely performs the given operation (either +, -, / or *) on the two numbers and returns
// the correct float result.

function currencyOperation(float1,operation,float2) {
  let result;

  switch (operation) {
    case "+":
      result = (Number(float1.toFixed(2)) + Number(float2.toFixed(2))).toFixed(
        2
      );

    case "-":
      result = (Number(float1.toFixed(2)) - Number(float2.toFixed(2))).toFixed(
        2
      );

    case "/":
      result = (Number(float1.toFixed(2)) / Number(float2.toFixed(2))).toFixed(
        2
      );

    case "*":
      result = (
        Number(float1.toFixed(precision)) * Number(float2.toFixed(2))
      ).toFixed(2);
  }

  return parseFloat(result);
}
