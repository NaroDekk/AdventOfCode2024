import fs from "fs";

export function extractDataFromFile(filename: string): Array<string> {
    const path = `${__dirname}/${filename}`;
    const file = fs.readFileSync(path, "utf-8");
    return Array.from(file.split("\n"));
}