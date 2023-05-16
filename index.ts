import * as Day01 from "./src/2022/01/index.ts";
import * as Day02 from "./src/2022/02/index.ts";
import * as Day03 from "./src/2022/03/index.ts";
import * as Day04 from "./src/2022/04/index.ts";
import * as Day05 from "./src/2022/05/index.ts";
import * as Day06 from "./src/2022/06/index.ts";
import * as Day07 from "./src/2022/07/index.ts";
import * as Day08 from "./src/2022/08/index.ts";
import * as Day09 from "./src/2022/09/index.ts";
import * as Day10 from "./src/2022/10/index.ts";
import * as Day11 from "./src/2022/11/index.ts";

import { readInputFile } from "./utils.ts";

const yearRegex = /^\d{4}$/;
const dayRegex = /^\d{1,2}$/;

interface Solution {
    dateStr: string;
    part1: () => Promise<string>;
    part2: () => Promise<string>;
}

const solutions: Solution[] = [
    {
        dateStr: "2022-01",
        part1: async () => Day01.part1(await readInputFile("2022", "01")),
        part2: async () => Day01.part2(await readInputFile("2022", "01")),
    },
    {
        dateStr: "2022-02",
        part1: async () => Day02.part1(await readInputFile("2022", "02")),
        part2: async () => Day02.part2(await readInputFile("2022", "02")),
    },
    {
        dateStr: "2022-03",
        part1: async () => Day03.part1(await readInputFile("2022", "03")),
        part2: async () => Day03.part2(await readInputFile("2022", "03")),
    },
    {
        dateStr: "2022-04",
        part1: async () => Day04.part1(await readInputFile("2022", "04")),
        part2: async () => Day04.part2(await readInputFile("2022", "04")),
    },
    {
        dateStr: "2022-05",
        part1: async () => Day05.part1(await readInputFile("2022", "05")),
        part2: async () => Day05.part2(await readInputFile("2022", "05")),
    },
    {
        dateStr: "2022-06",
        part1: async () => Day06.part1(await readInputFile("2022", "06")),
        part2: async () => Day06.part2(await readInputFile("2022", "06")),
    },
    {
        dateStr: "2022-07",
        part1: async () => Day07.part1(await readInputFile("2022", "07")),
        part2: async () => Day07.part2(await readInputFile("2022", "07")),
    },
    {
        dateStr: "2022-08",
        part1: async () => Day08.part1(await readInputFile("2022", "08")),
        part2: async () => Day08.part2(await readInputFile("2022", "08")),
    },
    {
        dateStr: "2022-09",
        part1: async () => Day09.part1(await readInputFile("2022", "09")),
        part2: async () => Day09.part2(await readInputFile("2022", "09")),
    },
    {
        dateStr: "2022-10",
        part1: async () => Day10.part1(await readInputFile("2022", "10")),
        part2: async () => Day10.part2(await readInputFile("2022", "10")),
    },
    {
        dateStr: "2022-11",
        part1: async () => Day11.part1(await readInputFile("2022", "11")),
        part2: async () => Day11.part2(await readInputFile("2022", "11")),
    },
];

const intro = `%c

_________________________________________________________________________________________

  __   ____  _  _  ____  __ _  ____     __  ____     ___  __  ____  ____    ____  ____ 
 / _\\ (    \\/ )( \\(  __)(  ( \\(_  _)   /  \\(  __)   / __)/  \\(    \\(  __)  (_  _)/ ___)
/    \\ ) D (\\ \\/ / ) _) /    /  )(    (  O )) _)   ( (__(  O )) D ( ) _)     )(  \\___ \\
\\_/\\_/(____/ \\__/ (____)\\_)__) (__)    \\__/(__)     \\___)\\__/(____/(____)   (__) (____/
                                                             
_________________________________________________________________________________________
`;

console.log(intro, "color: blue");

while (true) {
    const year = prompt("🌍 Enter Year [YYYY]:")!;
    if (!yearRegex.test(year!)) {
        console.log("Invalid value. Try again.\n");
        continue;
    }

    const day = prompt("📅 Enter Day [DD]:");
    if (!dayRegex.test(day!)) {
        console.log("Invalid value. Try again.\n");
        continue;
    }

    const queryString = `${year}-${day}`;

    const solution = solutions.find((s) => s.dateStr === queryString);

    if (!solution) {
        console.log("Solution does not exist. \n");
        continue;
    }

    const p1 = await solution.part1();
    const p2 = await solution.part2();

    console.log(`%c\nSolutions for ${year} day-${day}`, "color: cyan");
    console.log("%c_______________________________\n", "color: cyan");

    console.log(`Part 1: ${p1}`);
    console.log(`Part 2: ${p2}`);
    console.log("%c_______________________________\n", "color: cyan");
}
