const readlineSync = require("readline-sync");

const MAX = Number.MAX_SAFE_INTEGER;
const MIN = Number.MIN_SAFE_INTEGER;

let lowerbound = Number(readlineSync.question("\nLower bound: "));
let upperbound = Number(readlineSync.question("\nUpper bound: "));

while (lowerbound>upperbound) {
  lowerbound = Number(readlineSync.question("\nLower bound: "));
  upperbound = Number(readlineSync.question("\nUpper bound: "));
}
