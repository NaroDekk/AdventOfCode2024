import { extractDataFromFile } from "./reader";

function isAscending(report: Array<number>): boolean{
    let increaseValue = 0;
    for (let i = 1; i < report.length; i++){
        increaseValue += report[i] - report[i - 1];
    }

    return increaseValue >= 0;
}

function isSafe(report: string){
    const levels = report.split(" ").map((level) => parseInt(level));
    let previousLevel: number | undefined;
    let ascending = isAscending(levels);
    let fails = 0;
    for (let level of levels){
        if (previousLevel === undefined){
            previousLevel = level;
            continue;
        }
        let difference = Math.abs(level - previousLevel);
        if (difference < 1 || difference > 3){
            fails++;
        }
        if ((ascending && level < previousLevel) || (!ascending && level > previousLevel)){
            fails++;
        }
        if (fails > 1){
            return false;
        }
        previousLevel = level;
    }
    return true;
}

function countSafeReports(reports: Array<string>){
    let count = 0;
    reports.forEach((report) => {
        if (isSafe(report)){
            count++;
        }
    });
    return count;
}

const reports = extractDataFromFile("input.txt");
console.log("Safe Reports : " + countSafeReports(reports));