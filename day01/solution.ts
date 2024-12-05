import { extractDataFromFile } from "./reader";

const listA: Array<number> = new Array();
const listB: Array<number> = new Array();

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

function calcTotalSimilarity() {
  let totalSimilarity = 0;
  for (let i = 0; i < listA.length; i++) {
    let occurences = 0;
    listB.forEach((element) => occurences += listA[i] === element ? 1 : 0);
    totalSimilarity += occurences * listA[i];
  }
  return totalSimilarity;
}

extractDataFromFile("./input.txt", listA, listB);
sortLists();
console.log("Distance between lists " + calcTotalDistance());
console.log("Similarity score " + calcTotalSimilarity());
