const readlineSync = require("readline-sync");

MIN = 0;
MAX = Number.MAX_SAFE_INTEGER;

console.log("")
let integer = 0;

do {
  integer = Number(readlineSync.question("Non-negative integer: "));
} while (integer < MIN || integer > MAX || Number.isNaN(integer) || !Number.isInteger(integer)){

}

let prime = true;
for (let i = 2; i < integer; i++) {
  if (integer % i ==+ 0) {
    prime = false;
  }
}

if (integer == 0) {
  console.log("\nNot prime.\n");
} else if (integer == 1) {
  console.log("\nNot prime.\n");
} else if (prime == true) {
  console.log("\nPrime.\n");
} else {
  console.log("\nNot prime.\n");
}
