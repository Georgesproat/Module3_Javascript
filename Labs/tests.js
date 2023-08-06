// ++ try and create a 'makeMultiplier' function that works similarly to makeAdder

// function makeMultiplier(x) {
//   return function (y) {
//     return x * y;
//   };
// }

// const multi5 = makeMultiplier(5);

// console.log(multi5(10));

// let globalVariableCat = "cat";
// let myFunctionCounter = 0;

// function myFunction() {
//   let localVariableDog = "dog";
//   myFunctionCounter++;
//   return "global function with local scope variable " + localVariableDog;
// }

// console.log(myFunction());
// console.log(myFunction());
// console.log(myFunction());

// console.log("Function has been called " + myFunctionCounter + " times.");

// // let tickId = setInterval(() => console.log("tick"), 2000);
// // setTimeout(() => clearInterval(tickId), 10 * 1000);

// function delayedFunction(parameter, delayInMilliseconds) {
//   setTimeout(() => {
//     console.log("", parameter);
//   }, delayInMilliseconds);
// }

// // delayedFunction("Hello does this work?", 3000);
// // setTimeout;

// // create your own object, eg. a famous movie, which has a function that relies on context
// let famousMovie = {
//   title: "The Departed",
//   released: 2006,
//   actors: [
//     "Leonardo DiCaprio",
//     "Matt Damon",
//     "Jack Nicholson",
//     "Mark Wahlberg"
//   ],
//   synopsis:
//     "A game of cat and mouse between moles working for the Boston Police and the Costello Mob",

//   Awards: 'The Departed won the academy award for best picture ',
//   printDescription() {
//     console.log(
//       `${this.title} was released in ${
//         this.released
//       } and stars: ${this.actors.join(", ")}. ${this.synopsis}. ${this.Awards}.`
//     );
//   }
// };

// // ++ test your function
// famousMovie.printDescription();

// // ++ call your function with a 2s delay timer and make sure it still prints the right values
// setTimeout(()=> famousMovie.printDescription(),1200)
// // ++ update your object by changing one of the properties
// // famousMovie {...famousMovie.Awards:'Won award for best directing'}


// // ++ use bind to make sure the delayed method still prints the original (not updated) values

// // object with both data properties and accessor properties
// const jackBlack = {
//   firstName: 'Jack',
//   surname: 'Black',
//   dateOfBirth: new Date('1969-08-28'),
//   get fullName() { // now we can do jackBlack.fullName and it will work it out
//   return this.firstName + ' ' + this.surname;
//   },
//   get age() { // accessor will work out current age based on birthday
//   const today = new Date();
//   return today.getFullYear() - this.dateOfBirth.getFullYear();
//   }
//   }
//   jackBlack.age = 44 // not writable (no setter), won’t work
//   console.log(jackBlack.fullName) // Jack Black
//   console.log(jackBlack.age) // 54 (currently) - no setter so change to 44 doesn't work
//   for (let prop in jackBlack) console.log(`${prop} is ${jackBlack[prop]}`) // enumerable props
//   // includes firstName, surname, dateofBirth, fullName and age



// function User(firstName,lastName, birthday) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.birthday = birthday;

//   // age is calculated from the current date and birthday
//   Object.defineProperty(this, "age", {
//     get() {
//       let todayYear = new Date().getFullYear();
//       return todayYear - this.birthday.getFullYear();
//     }
//   });

//   // Define getters and setters for first and last name parts
//   Object.defineProperties(this, {
   
//     fullname: {
//       get() {
//         return this.firstName +" " + this.lastName ;
//       },
      
//     }
//   });
// }

// let George = new User("George", "Washington", new Date(1995, 8, 26));

// console.log(George.birthday); // birthday is available
// console.log(George.age);      // age is available

// console.log(George.firstName);    // Get first name
// console.log(George.lastName);     // Get last name

// George.firstName = "George";  // Set first name
// George.lastName = "Smith";        // Set last name
// console.log(George.fullname); // Get fullname



// const animal = {
//   Sleeps: true,
//   Eats: true,
//   Legs: 4
// };


// let Dog = Object.create(animal, {
//   talks: {
//     value: false,
//     enumerable:true
//   },
//   Mood: {
//     value: 'Happy',
//     enumerable:true
//   }
// });

// console.log(Dog)


// for (let prop in Dog) console.log('${prop} is ${Dog[prop]}');

// function Snake(name) {
//   this.name = name
//   this.Legs = 0;

// }

// Snake.prototype = animal;

// const snake = new Snake('Jake');
// console.log('snake eats?' + snake.Eats);

// for(let prop in snake) console.log('${prop} is ${snake[prop]}')

class Animal {

  // static homePlanet = 'Earth';

  constructor(name, topSpeed) {
      this.speed = 0;
      this.topSpeed = topSpeed;
      this.name = name;
      this.type = 'animal'
  }
  
  run() {
      this.speed = this.topSpeed;
      console.log(`${this.name} runs with speed ${this.speed}.`);
  }

  stop() {
      this.speed = 0;
      console.log(`${this.name} stands still.`);
  }

  describe() {
      console.log(`${this.name} has a top speed of ${this.topSpeed}km p/h and a type of ${this.type}`)
  };

  // static compare(animal1, animal2) {
  //     return animal1.topSpeed > animal2.topSpeed
  // }
}

// 1. create your own type of animal class the extends from the parent
// 2. give it some additional custom properties
class Hedgehog extends Animal {
  constructor(name, topspeed, prickly )
  {
    super(name, topspeed);
    this.prickly = prickly;
    this.type = 'Hedgehog';
  }
  curlUp() {
    console.log(`${this.name} curls up`);
  }
  stop() {
    super.stop();
    this.curlUp();
  }
  }
const spike = new Hedgehog('Spike',2,true);
console.log(spike)
spike.stop()




function checkDate(date) {
  try {
   

   
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    console.log('Error check done.');
  }
}

checkDate('1995-8-26') 
checkDate('Pineapple')
checkDate('1234')