const readlineSync = require("readline-sync");

const MAX = Number.MAX_SAFE_INTEGER;
const MIN = 1;

let integer = 0

console.log()

do {
  integer = Number(readlineSync.question("\rPositive integer: "));
}
while ((integer < MIN || integer > MAX) || Number.isNaN(integer) || !Number.isInteger(integer) ) {

}

 let space = "";

while (integer > 0) {
    let reverse = (integer % 10);
    integer = Math.floor(integer / 10);


if (integer>0){
  space = space + reverse + ", ";
    } else {
      space = space + reverse + ". ";
    }
  }


console.log("\n" + space + "\n");
