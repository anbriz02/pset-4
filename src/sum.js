const readlineSync = require("readline-sync");

const MAX = Number.MAX_SAFE_INTEGER;
const MIN = Number.MIN_SAFE_INTEGER;

let lowerbound = 1;
let upperbound = -1;

while (lowerbound > upperbound || Number.isNaN(lowerbound) || Number.isNaN(upperbound) || (lowerbound < MIN || lowerbound > MAX) || (upperbound < MIN || upperbound > MAX)) {
  lowerbound = Number(readlineSync.question("\nLower bound: "));
  upperbound = Number(readlineSync.question("Upper bound: "));
}

let sum = 0;

for (let i = lowerbound; i <= upperbound; i++) {
    if (i % 2 === 0) {
      sum = (sum + i);
    }
}

console.log("\n" + sum + "." )
