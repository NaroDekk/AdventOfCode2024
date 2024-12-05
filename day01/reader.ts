import fs from "fs";

export function extractDataFromFile(filename: string, listA: Array<number>, listB: Array<number>): void {
    const path = `${__dirname}/${filename}`;
    const file = fs.readFileSync(path, "utf-8");
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