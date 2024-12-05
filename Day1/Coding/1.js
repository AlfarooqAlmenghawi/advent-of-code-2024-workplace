const fileToRead = __dirname + "/1.txt";

function findTotalDifference(list1, list2) {
  let newList1 = [...list1];
  let newList2 = [...list2];

  newList1.sort((a, b) => {
    return a - b;
  });
  newList2.sort((a, b) => {
    return a - b;
  });

  const differenceBetweenElements = [];
  for (let i = 0; i < newList1.length; i = i + 1) {
    differenceBetweenElements.push(Math.abs(newList1[i] - newList2[i]));
  }

  let total = 0;
  for (const difference of differenceBetweenElements) {
    total = total + difference;
  }

  return total;
}

function findSimilarityScore(list1, list2) {
  const individualSimilarityScores = list1.map((numberInList1) => {
    if (list2.includes(numberInList1)) {
      return (
        numberInList1 *
        list2.filter((numberInList2) => {
          return numberInList1 === numberInList2;
        }).length
      );
    }
    return 0;
  });
  let total = 0;
  for (const score of individualSimilarityScores) {
    total = total + score;
  }
  return total;
}

const fs = require("fs");
const input = fs.readFileSync(fileToRead, "utf-8");
const leftList = [];
const rightList = [];
input
  .trim()
  .split("\n")
  .forEach((line) => {
    const [left, right] = line.split(/\s+/).map(Number);
    leftList.push(left);
    rightList.push(right);
  });

module.exports = { findTotalDifference, findSimilarityScore };
