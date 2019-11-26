const readlineSync = require("readline-sync");

  let MAX = 9999999999999999;
  let MIN = 1;

  let num= 0
  let num1= 0
  let sum = 0
  let digit = 0
  let digit1 = 0
  let digit2 = 0
  let dig = 0;
  let dig1 = 1;


  console.log();
      while (num < MIN || num > MAX || Number.isNaN(num) || !Number.isInteger(num)){
    num= Number(readlineSync.question("Number: "));
  }
  num1 = num;

  while (num1>= 1) {
    num1 /= 10;
    digit+= 1;
  }
  digit1 = Math.floor(num/ 10 ** (digit- 1));
  digit2 = (Math.floor(num/ 10 ** (digit- 2)) / 10) * 10;

  for (let i = 0; i < digit; i++) {
    dig = (num- Math.floor(num/ 10) * 10);
    num= Math.floor(num/ 10);
    if (i % 2 == 1) {
      if (dig * 2 >= 10) {
        sum += ((dig * 2 - dig * 2 % 10) / 10 + dig * 2 % 10);
      }
      else if (dig * 2 < 10) {
        sum += dig * 2;
      }
    }
    else {
      sum += dig;
    }
    dig1 += 1;
  }

  if ((digit== 13 || digit== 16) && digit1 == 4) {
    console.log("\nVisa.\n")
  }else if (digit== 15 && (digit2 == 34 || digit2 == 37)) {
    console.log("\nAmex.\n")
  }else if (digit== 16 && (digit2 <= 55 && digit2 >= 51)) {
    console.log("\nMastercard.\n")
  }else if (sum / 10 % 1 != 0) {
      console.log("\nInvalid.\n")
  }
