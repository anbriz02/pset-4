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
let smallest = 0;
let largest = 0;
let hf = integer;


   for (i = 1; i <= integer; i++) {
       if (integer % i == 0 && integer / i === i) {
        largest = i;
        factor = factor + largest + ", ";
    }
    else if (integer % i === 0 && i < hf) {
        smallest = i;
        largest = integer / i;
        hf = largest;
        factor = factor + smallest + ", " + largest + ", ";
    }
    else if (i >= hf) {
        var comma = " " + String(largest) + ", ";
        factor = factor.replace(comma, " " + String(largest) + ".");
      }
  }

  console.log("\n" + factor + "\n");
