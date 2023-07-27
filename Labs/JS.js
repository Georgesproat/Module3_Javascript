//1. What are the results of these expressions? (answer first, then use console.log() to check)

console.log("" + 1 + 0); // 10 its a string
console.log("" - 1 + 0); // -1 its numerical
console.log(true + false); // 1 because true = 1 and false = 0
console.log(!true); // false because ! is not, so !true is not true
console.log(6 / "3"); // 2 because strings are usually converted to numerical if they have numbers
console.log("2" * "3"); // 6 same as above
console.log(4 + 5 + "px"); // 9px left to right adding
console.log("$" + 4 + 5); // $45, I thought it would be the same as above and would be $9
console.log("4" - 2); // 2 string acting numerical
console.log("4px" - 2); // NaN the px must not allow the 4 to be treated as a number
console.log(" -9 " + 5); // -9 5 because the numbers start differently so it lists them
console.log(" -9 " - 5); //  -14 numeric subtraction because it can compare the - before the numbers?
console.log(null + 1); // 1 null is treated like a 0
console.log(undefined + 1); // NaN because undefined does not have numeric value?
console.log(undefined == null); // true because == means a loose comparison
console.log(undefined === null); // false because === means exatly = which they aren't
console.log(" \t \n" - 2); // -2 I'm not sure why

//2. Which of the below are not giving the right answer? Why are they not correct? How can we fix them?

let three = "3";
let four = "4";
let thirty = "30";
//what is the value of the following expressions?
let additionwrong = three + four; // 34 listing
let addition = parseInt(three) + parseInt(four); // convert them to numbers
console.log(additionwrong);
console.log(addition);
let multiplication = three * four; // 12 numeracy not listing
console.log(multiplication);
let division = three / four; // 0.75 numeracy not listing
console.log(division);
let subtraction = three - four; // -1 not listing
console.log(subtraction);
let lessThan1 = three < four; // true but only because three came before 4
console.log(lessThan1);
let lessThan2wrong = thirty < four; // true because the 3 in 30 came before 4
console.log(lessThan2wrong);
let lessThan2 = parseInt(thirty) < parseInt(four); // converts them to numbers. probably need to covert all of these to be accurate
console.log(lessThan2);

// 3. Which of the following console.log messages will print? Why?

if (0) console.log("#1 zero is true"); // 0 numerically is false
if ("0") console.log("#2 zero is true"); // this string exists therefore is true
if (null) console.log("null is true"); // null is considered a false value in javascript
if (-1) console.log("negative is true"); // 1 is a true value whether psoitive or negative
if (1) console.log("positive is true");

//4. Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a and b. What does the ‘+=’ do?

// let a = 2, b = 3;
// let result = `${a} + ${b} is `;
// if (a + b < 10) {
// result += 'less than 10';
// } else {
// result += 'greater than 10';
// }

let a = 12,
  b = -3;
let result = `${a} + ${b} is ${
  a + b < 10 ? "less than 10" : "greater than 10"
}`;

console.log(result);

//5. Rewrite the following function using: a) function expression syntax, and b) arrow function syntax. Test each version to make sure they work the same.

// function getGreeting(name) {
//   return "Hello " + name + "!";
// }

// const getGreeting = function (name) {
//   return "Hello " + name + "!";
// };

const getGreeting = (name) => "Hello " + name + "!";

console.log(getGreeting("George"));

//6. a) Complete the inigo object by adding a lastName property and including it in the greeting.
//b) Complete getCatchPhrase so that if the person argument has 6 fingers, it instead prints his famous catch phrase to the console. HINT: see https://www.imdb.com/title/tt0093779/characters/nm0001597.
//c) Update getCatchPhrase to use arrow function syntax and a conditional operator.

const westley = {
  name: "Westley",
  numFingers: 5,
};
const rugen = {
  name: "Count Rugen",
  numFingers: 6,
};
const inigo = {
  firstName: "Inigo",
  lastName: "Montoya",
  greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
    console.log(greeting + this.getCatchPhrase(person));
  },
  // getCatchPhrase(person) {
  //   if (person.numFingers === 6) {
  //     return "You killed my father. Prepare to die!";
  //   } else {
  //     return "Nice to meet you.";
  //   }
  getCatchPhrase: (person) =>
    person.numFingers === 6
      ? "You killed my father. Prepare to die!"
      : "Nice to meet you.",
};

inigo.greeting(westley);
inigo.greeting(rugen);

//7. The following object represents a basketball game and keeps track of the score as the game progresses.
//a) Modify each of the methods so that they can be ‘chained’ together and the last line of the example code works
//b) Add a new method to print the full time final score
//c) Add a new object property to keep track of the number of fouls and a method to increment it,
//similar but separate to the score. Include the foul count in the half time and full time console messages
//d) Test your object by chaining all the method calls together in different combinations.

const basketballGame = {
  score: 0,
  fouls: 0,
  freeThrow() {
    this.score++;
    return this;
  },
  basket() {
    this.score += 2;
    return this;
  },
  threePointer() {
    this.score += 3;
    return this;
  },
  foul() {
    this.fouls++;
    return this;
  },
  halfTime() {
    console.log("Halftime score is " + this.score, "fouls: " + this.fouls);
    return this;
  },
  fullTimeScore() {
    console.log(
      "Full-time final score is " + this.score,
      "fouls: " + this.fouls
    );
    return this;
  },
};
//modify each of the above object methods to enable function chaining as below:
basketballGame
  .basket()
  .foul()
  .freeThrow()
  .freeThrow()
  .basket()
  .threePointer()
  .halfTime()
  .threePointer()
  .basket()
  .foul()
  .freeThrow()
  .freeThrow()
  .fullTimeScore();

//8. The object below represents a single city.
//a) Write a function that takes an object as an argument and uses a for...
//in loop to access and print to the console each of those object properties and their values.
//Test it using the sydney object below.
//b) Create a new object for a different city with different properties and call your function again with the new object.

function cityStats(obj) {
  for (let prop in obj) {
    console.log(prop + ":", obj[prop]);
  }
}

const sydney = {
  name: "Sydney",
  population: 5_121_000,
  state: "NSW",
  founded: "26 January 1788",
  timezone: "Australia/Sydney",
};

cityStats(sydney);

const auckland = {
  name: "Auckland",
  population: 1_657_000,
  state: "Auckland",
  timezone: "New Zealand/Wellington",
};

cityStats(auckland);
