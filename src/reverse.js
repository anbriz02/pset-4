const readlineSync = require("readline-sync");

const MAX = Number.MAX_SAFE_INTEGER;
const MIN = 1;

let integer = Number(readlineSync.question("\nPositive integer: "));

while ( Number.isNaN(integer) || Number.isNaN(integer) || (integer < MIN || integer > MAX) || (integer < MIN || integer > MAX)) {
  integer = Number(readlineSync.question("\nPositive integer: "));

}
