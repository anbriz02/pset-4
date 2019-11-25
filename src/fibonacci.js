const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = 78;

console.log("");
let integer = 0;

let stuff1 = 0;
let stuff2 = 1;
let stuff3 = 0;

do {
  integer = Number(readlineSync.question("Positive integer: "));
} while (integer < MIN || integer > MAX || Number.isNaN(integer) || !Number.isInteger(integer)){

}


for (let i = 2; i < integer + 1; i++){
  stuff3 = stuff1 + stuff2;
       stuff1 = stuff2;
       stuff2 = stuff3;
  }

stuff3 = (stuff3).toLocaleString()

console.log("\n" + stuff3 + ".")
