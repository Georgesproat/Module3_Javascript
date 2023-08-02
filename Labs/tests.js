// ++ try and create a 'makeMultiplier' function that works similarly to makeAdder

function makeMultiplier(x) {
  return function (y) {
    return x * y;
  };
}

const multi5 = makeMultiplier(5);

console.log(multi5(10));

let globalVariableCat = "cat";
let myFunctionCounter = 0;

function myFunction() {
  let localVariableDog = "dog";
  myFunctionCounter++;
  return "global function with local scope variable " + localVariableDog;
}

console.log(myFunction());
console.log(myFunction());
console.log(myFunction());

console.log("Function has been called " + myFunctionCounter + " times.");

let tickId = setInterval(() => console.log("tick"), 2000); 
setTimeout(() => clearInterval(tickId), 10 * 1000); 

function delayedFunction(parameter, delayInMilliseconds) {
  setTimeout(() => {
    console.log("", parameter);
  }, delayInMilliseconds);
}

delayedFunction("Hello does this work?", 3000);
setTimeout
