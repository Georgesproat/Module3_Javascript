let quickFox = "The quick brown fox jumps over the lazy dog.";

let uppercaseFox = quickFox.toUpperCase();
let lowercaseFox = quickFox.toLowerCase();

console.log("Uppercase: " + uppercaseFox);
console.log("Lowercase: " + lowercaseFox);

let startsWithThe = quickFox.startsWith("The");
let endsWithDog = quickFox.endsWith("dog.");

console.log("Starts with 'The': " + startsWithThe);
console.log("Ends with 'dog.': " + endsWithDog);

let substringFox = quickFox.substring(4, 15); // Extracts characters from index 4 to 14 (end index not included)
let indexOfFox = quickFox.indexOf("fox"); // Returns the index of the first occurrence of "fox"

console.log("Substring: " + substringFox);
console.log("Index of 'fox': " + indexOfFox);

const cities_au = ["Sydney", "Melbourne", "Adelaide", "Cairns", "Brisbane"];
const cities_nz = [
  "Auckland",
  "Christchurch",
  "Hamilton",
  "Wellington",
  "Queenstown",
];

cities_au.pop();
cities_au.push("Perth", "Darwin");

cities_nz.unshift("Dunedin", "Nelson");

cities_nz.splice(3, 4, "Wanaka", "Napier");

const indexMelbourne = cities_au.indexOf("Melbourne");
const indexHamilton = cities_nz.indexOf("Hamilton");

console.log("Cities in Australia:", cities_au);
console.log("Cities in New Zealand:", cities_nz);
console.log("Index of Melbourne in cities_au:", indexMelbourne);
console.log("Index of Hamilton in cities_nz:", indexHamilton);

// const people = [
//   { firstName: "Wendy", lastName: "Darton", age: 52, location: "QLD" },
//   { firstName: "Steven", lastName: "Williams", age: 41, location: "NSW" },
//   { firstName: "Phillip", lastName: "Robertson", age: 38, location: "VIC" },
//   { firstName: "Connor", lastName: "Edmonds", age: 24, location: "NZ" },
//   { firstName: "Sheila", lastName: "Horne", age: 37, location: "VIC" },
// ];

const personConnor = people.find((person) => person.firstName === "Connor");


const peopleOver30 = people.filter((person) => person.age > 30);

console.log("Person with first name Connor:", personConnor);
console.log("People over the age of 30:", peopleOver30);


let months = 'January,February,March,April,May,June,July,August,September,October,November,December';

// Use split, map, and join to change the months into their short 3-letter version
let shortMonths = months.split(',').map(month => month.slice(0, 3)).join(',');

// In the Philippines, the 'ber' (brr) months are considered the colder part of the year
let berMonths = months.split(',').filter(month => month.includes('ber'));

const people = [
    {firstName: 'Wendy', lastName: 'Darton', age: 52, location: 'QLD'},
    {firstName: 'Steven', lastName: 'Williams', age: 41, location: 'NSW'},
    {firstName: 'Phillip', lastName: 'Robertson', age: 38, location: 'VIC'},
    {firstName: 'Connor', lastName: 'Edmonds', age: 24, location: 'NZ'},
    {firstName: 'Sheila', lastName: 'Horne', age: 37, location: 'VIC'},
];

// Use for...of loop to print out the name and age of each person
for (const person of people) {
    console.log(`${person.firstName} ${person.lastName}, Age: ${person.age}`);
}

console.log('Short 3-letter months:', shortMonths);
console.log('Ber months:', berMonths);
