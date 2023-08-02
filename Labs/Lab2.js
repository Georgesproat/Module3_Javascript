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

function currencyOperation(float1, operation, float2) {
  let result;

  switch (operation) {
    case "+":
      result = (Number(float1.toFixed(2)) + Number(float2.toFixed(2))).toFixed(
        2
      );
      break;

    case "-":
      result = (Number(float1.toFixed(2)) - Number(float2.toFixed(2))).toFixed(
        2
      );
      break;

    case "/":
      result = (Number(float1.toFixed(2)) / Number(float2.toFixed(2))).toFixed(
        2
      );
      break;

    case "*":
      result = (Number(float1.toFixed(2)) * Number(float2.toFixed(2))).toFixed(
        2
      );
      break;
  }

  return parseFloat(result);
}

console.log(currencyOperation(5, "*", 6));
console.log(currencyOperation(12, "/", 4));

// 6. Create a function unique(duplicatesArray) which takes an array parameter that may
// include duplicates. Your function should return an array containing only the unique values
// from duplicatesArray.
// Test with the following arrays and create another one of your own.

function unique(duplicatesArray) {
  return [...new Set(duplicatesArray)];
}

const colours = [
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "red",
  "blue",
  "yellow",
];
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];
const customArray = [12, 2, 12, 34, 45, 45, 52, 52, 51];

console.log(unique(colours));
console.log(unique(testScores));
console.log(unique(customArray));

// 7. Use the following array of book objects to practice the array functions for map, find and
// filter. Test each of your answers to the below tasks.
// a) Write a function getBookTitle(bookId) that uses the find function to return the
// title of the book object with the matching id.

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { id: 3, title: "1984", author: "George Orwell", year: 1949 },
  { id: 4, title: "Brave New World", author: "Aldous Huxley", year: 1932 },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
  },
];

function getBookTitle(bookId) {
  const book = books.find((book) => book.id === bookId);
  return book ? book.title : null;
}

console.log(getBookTitle(3));
console.log(getBookTitle(6));

// b) Write a function getOldBooks() that uses the filter function to return all book
// objects written before 1950.
function getOldBooks() {
  const oldBooks = books.filter((book) => book.year < 1950);
  return oldBooks;
}

console.log(getOldBooks());
// c) Write a function addGenre() that uses the map function to add a new genre property
// to all of the above books, with the value ‘classic’.

function addGenre() {
  const booksWithGenre = books.map((book) => {
    return { ...book, genre: "classic" };
  });

  return booksWithGenre;
}

console.log(addGenre());

// d) (Extension) Write a function getTitles(authorInitial) that uses map and
// filter together to return an array of book titles for books written by authors whose
// names start with authorInitial.

function getTitles(authorInitial) {
  const filteredBooks = books.filter((book) =>
    book.author.startsWith(authorInitial)
  );
  const titles = filteredBooks.map((book) => book.title);
  return titles;
}

const authorInitial = "F";
const titlesByAuthorInitial = getTitles(authorInitial);
console.log(titlesByAuthorInitial);

// e) (Extension) Write a function latestBook() that uses find and forEach to get the
// book with the most recent publication date.

function latestBook() {
  let latestBook = null;
  let latestYear = 0;

  books.forEach((book) => {
    if (book.year > latestYear) {
      latestBook = book;
      latestYear = book.year;
    }
  });

  return latestBook;
}

const latestBookInfo = latestBook();
console.log(latestBookInfo);

// 8. The following code creates a new Map object for storing names beginning with A, B, or C
// with their phone numbers.
const phoneBookABC = new Map(); //an empty map to begin with
phoneBookABC.set("Annabelle", "0412312343");
phoneBookABC.set("Barry", "0433221117");
phoneBookABC.set("Caroline", "0455221182");
// a) Create a new phoneBookDEF Map to store names beginning with D, E or F
// b) Initialise the contents of phoneBookDEF by passing in an array of keys/values
const phoneBookDEF = new Map();
phoneBookDEF.set("Daniel", "0237778888");
phoneBookDEF.set("Emma", "0212223333");
phoneBookDEF.set("Frankie", "0223334444");
// c) Update the phone number for Caroline
phoneBookABC.set("Caroline", "0225556666");
// d) Write a function printPhoneBook(contacts) that prints the names and phone
// numbers in the given Map
function printPhoneBook(contacts) {
  contacts.forEach((phoneNumber, name) => {
    console.log(`${name}: ${phoneNumber}`);
  });
}

console.log("Phone Book ABC:");
printPhoneBook(phoneBookABC);
console.log("Phone Book DEF:");
printPhoneBook(phoneBookDEF);
// e) Combine the contents of the two individual Maps into a single phoneBook Map
const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);
// f) Print out the full list of names in the combined phone book
console.log("Combined Phone Book:");
phoneBook.forEach((phoneNumber, name) => {
  console.log(name);
});

// 9. Given the below salaries object, perform the following tasks.
let salaries = {
  Timothy: 35000,
  David: 25000,
  Mary: 55000,
  Christina: 75000,
  James: 43000,
};

// a) Write a function sumSalaries(salaries) that calculates and returns the total of all salaries
function sumSalaries(salaries) {
  let totalSalary = 0;
  for (let salary of Object.values(salaries)) {
    totalSalary += salary;
  }
  return totalSalary;
}
console.log(sumSalaries(salaries));

// b) Write a function topEarner(salaries) that calculates and returns the name of the person
// earning the highest salary
function topEarner(salaries) {
  let highestSalary = 0;
  let topEarnerName = null;

  for (let [name, salary] of Object.entries(salaries)) {
    if (salary > highestSalary) {
      highestSalary = salary;
      topEarnerName = name;
    }
  }

  return topEarnerName;
}
console.log(topEarner(salaries));

// 10.The following code uses the Date object to print the current time and the number of hours
// that have passed today so far. Extend the code to do the following:
const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours have passed so far today')
// a) Print the total number of minutes that have passed so far today

const minutesPassed = today.getHours() * 60 + today.getMinutes();
console.log('Total minutes passed so far today:', minutesPassed);

// b) Print the total number of seconds that have passed so far today

const secondsPassed = (today.getHours() * 60 + today.getMinutes()) * 60 + today.getSeconds();
console.log('Total seconds passed so far today:', secondsPassed);

// c) Calculate and print your age as: 'I am x years, y months and z days old'

const birthDate = new Date('1995-08-26'); 

const ageInMilliseconds = today - birthDate;
const ageInSeconds = ageInMilliseconds / 1000;
const ageInMinutes = ageInSeconds / 60;
const ageInHours = ageInMinutes / 60;
const ageInDays = ageInHours / 24;

const years = Math.floor(ageInDays / 365);
const months = Math.floor((ageInDays % 365) / 30);
const days = Math.floor(ageInDays % 365) % 30;

console.log(`I am ${years} years, ${months} months, and ${days} days old.`);

// d) Write a function daysInBetween(date1, date2) which calculates and returns the amount
// of days in between the two given dates.

function daysInBetween(date1, date2) {
  const difference = Math.abs(date2 - date1);
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  return Math.floor(difference / millisecondsPerDay);
}

const date1 = new Date('1995-08-26');
const date2 = new Date('2035-08-26');
console.log('Days between date1 and date2:', daysInBetween(date1, date2));