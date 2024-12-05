const fileToRead = __dirname + "/2.txt";
const fs = require("fs");
const input = fs.readFileSync(fileToRead, "utf-8");
const arrayOfArraysOfNumbers = [];

input
  .trim()
  .split("\n")
  .forEach((line) => {
    const array = line.split(" ");
    const formatted = array.map((number) => {
      return Number(number);
    });
    arrayOfArraysOfNumbers.push(formatted);
  });

// console.log(arrayOfArraysOfNumbers);

function safeChecker(input) {
  const safeCount = 0;

  for (let i = 0; i < input.length; i++) {
    let safe = false;
    console.log(input[i]);
    input[i].forEach((number, index) => {
      const previousNumber = input[i][index - 1];
      const numberNow = input[i][index];
      console.log(previousNumber, "<< before, and after >>", numberNow);
      if (previousNumber) {
      }
    });
  }
}

module.exports = { safeChecker };
