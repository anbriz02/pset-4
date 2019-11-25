const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = 24;

console.log("");

let height = "";



do {
  height = Number(readlineSync.question("Height: "));
} while (height < MIN || height > MAX || Number.isNaN(height) || !Number.isInteger(height)){

}


console.log()



for (i = 2; i <= (height + 1); i++) {
    row = "";

    for (j = 1; j <= (height - i); j++) {
      row += ' ';
    }

    for (k = 1; k <= i; k++) {
      row += '#';
    }

    console.log(row);

  }
console.log();
