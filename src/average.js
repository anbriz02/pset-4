const readlineSync = require("readline-sync");


const MAX = Number.MAX_SAFE_INTEGER;
const MIN = 0;

console.log("");

let integer = 0;
let sum = 0;
let amount = 0;

do {
  input = Number(readlineSync.question("Non-negative integer: "));
  while (integer < MIN || integer > MAX || Number.isNaN(integer) || !Number.isInteger(integer) ) {

  }

} while (integer > 0){

sum = sum + integer;
amount = amount + 1;
}

let average = sum / amount;
average = average.toLocaleString();



console.log("\n" + average + ".");
