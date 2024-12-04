import fs from "fs";

const listA = new Array();
const listB = new Array();
const LINE_LENGTH = 13;

function extractDataFromFile(filePath: string): void {
  const file = fs.readFileSync(filePath, "utf-8");
  const lines = file.split("\n");

  lines.forEach((line) => {
    const [a, b] = line.split("   ");
    if (isNaN(parseInt(a)) || isNaN(parseInt(b))) {
      return;
    }
    listA.push(parseInt(a));
    listB.push(parseInt(b));
  });
}

function sortLists(): void {
  listA.sort((a, b) => a - b);
  listB.sort((a, b) => a - b);
}

function calcTotalDistance() {
  let totalDistance = 0;
  for (let i = 0; i < listA.length; i++) {
    totalDistance += listA[i] < listB[i] ? listB[i] - listA[i] : listA[i] - listB[i];
  }
  return totalDistance;
}

extractDataFromFile("input.txt");
sortLists();
console.log(calcTotalDistance());
