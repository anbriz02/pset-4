const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;

let integer = 0


console.log()
do{
  integer = Number(readlineSync.question("Positive integer: "));
}
while ((integer < MIN || integer > MAX) || Number.isNaN(integer) || !Number.isInteger(integer) ) {

}

let factor = "";
let smallInteger = 0;
let largeInteger = 0;
let highestFactor = integer;


   for (i = 1; i <= integer; i++) {
       if (integer % i == 0 && integer / i === i) {
        largeInteger = i;
        factor = factor + largeInteger + ", ";
    }
    else if (integer % i === 0 && i < highestFactor) {
        smallInteger = i;
        largeInteger = integer / i;
        highestFactor = largeInteger;
        factor = factor + smallInteger + ", " + largeInteger + ", ";
    }
    else if (i >= highestFactor) {
        var comma = " " + String(largeInteger) + ", ";
        factor = factor.replace(comma, " " + String(largeInteger) + ".");
      }
  }

  console.log("\n" + factor + "\n");
