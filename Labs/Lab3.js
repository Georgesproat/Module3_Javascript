// 1. makeCounter below is a decorator function which creates and returns a function that
// increments a counter.
// a) Create a second counter counter2 using the makeCounter function and test to see if
// it remains independent to counter1
// b) Modify makeCounter so that it takes an argument startFrom specifying where the
// counter starts from (instead of always starting from 0)
// c) Modify makeCounter to take another argument incrementBy, which specifies how
// much each call to counter() should increase the counter value by.

function makeCounter(startFrom = 0, incrementBy = 1) {
  let currentCount = startFrom;
  return function () {
    currentCount += incrementBy;
    console.log(currentCount);
    return currentCount;
  };
}

let counter1 = makeCounter();
counter1();
counter1();

let counter2 = makeCounter(10, 2);
counter2();
counter2();

//   2. The following delayMsg function is intended to be used to delay printing a message until
// some time has passed.
// a) What order will the four tests below print in? Why?
// #4 #3 #2 #1
// b) Rewrite delayMsg as an arrow function
// c) Add a fifth test which uses a large delay time (greater than 10 seconds)
// d) Use clearTimeout to prevent the fifth test from printing at all.

const delayMsg = (msg) => {
  console.log(`This message will be printed after a delay: ${msg}`);
};
setTimeout(delayMsg, 100, "#1: Delayed by 100ms");
setTimeout(delayMsg, 20, "#2: Delayed by 20ms");
setTimeout(delayMsg, 0, "#3: Delayed by 0ms");
delayMsg("#4: Not delayed at all");
setTimeout(delayMsg, 11000, "#5: Delayed by 11s");
const fifthTimeout = setTimeout(delayMsg, 11000, "#5: Delayed by 11s");
clearTimeout(fifthTimeout);

// 3. 'Debouncing' is a concept that refers to 'putting off' the execution of multiple, fast-timed,
// similar requests until there's a brief pause, then only executing the most recent of those
// requests. See https://www.techtarget.com/whatis/definition/debouncing
// It's often used to handle fast-firing scrolling events in a browser, or to prevent multiple server
// requests being initiated if a user clicks repeatedly on a button.
// Using the following code to test and start with:
// a) Create a debounce(func) decorator, which is a wrapper that takes a function func and
// suspends calls to func until there's 1000 milliseconds of inactivity. After this 1 second
// pause, the most recent call to func should be executed and any others ignored.
// b) Extend the debounce decorator function to take a second argument ms, which defines the
// length of the period of inactivity instead of hardcoding to 1000ms
// c) Extend debounce to allow the original debounced function printMe to take an argument
// msg which is included in the console.log statement.

function debounce(func, ms) {
  let timeout;

  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), ms);
  };
}

function printMessage(msg) {
  console.log(`printing debounced message: ${msg}`);
}

const debouncedPrint = debounce(printMessage, 1000);
// Fire off 3 calls to debouncedPrint within 300ms - only the LAST one should print after 1000ms of no calls
setTimeout(() => debouncedPrint("Message 1"), 100);
setTimeout(() => debouncedPrint("Message 2"), 200);
setTimeout(() => debouncedPrint("Message 3"), 300);

//   4. The Fibonacci sequence of numbers is a famous pattern where the next number in the
// sequence is the sum of the previous 2.
// e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.
// a) Write a function printFibonacci() using setInterval that outputs a number in
// the Fibonacci sequence every second.

function printFibonacci() {
    let a = 0;
    let b = 1;
  
    const intervalId = setInterval(() => {
      console.log(b);
      const next = a + b;
      a = b;
      b = next;
    }, 1000);
  
    return intervalId;
  }
  
  const intervalId = printFibonacci();
  
// b) Write a new version printFibonacciTimeouts() that uses nested setTimeout
// calls to do the same thing

function printFibonacciTimeouts() {
    let a = 0;
    let b = 1;
    let count = 0;
  
    function printNext() {
      if (count > 0) {
        console.log(b);
        count--;
      }
      const next = a + b;
      a = b;
      b = next;
  
      if (count > 0) {
        setTimeout(printNext, 1000);
      }
    }
  
    setTimeout(printNext, 1000);
  }
  
  printFibonacciTimeouts();

// c) Extend one of the above functions to accept a limit argument, which tells it how many
// numbers to print before stopping.


  
  
  
  
  
  
  