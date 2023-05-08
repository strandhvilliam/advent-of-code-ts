import * as Day1 from "./src/2022/day_1/index.ts";
import * as Day2 from "./src/2022/day_2/index.ts";
import * as Day3 from "./src/2022/day_3/index.ts";
import * as Day4 from "./src/2022/day_4/index.ts";
import * as Day5 from "./src/2022/day_5/index.ts";
import * as Day6 from "./src/2022/day_6/index.ts";
import * as Day7 from "./src/2022/day_7/index.ts";
import * as Day8 from "./src/2022/day_8/index.ts";
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
		dateStr: "2022-1",
		part1: async () => Day1.part1(await readInputFile("2022", "1")),
		part2: async () => Day1.part2(await readInputFile("2022", "1")),
	},
	{
		dateStr: "2022-2",
		part1: async () => Day2.part1(await readInputFile("2022", "2")),
		part2: async () => Day2.part2(await readInputFile("2022", "2")),
	},
	{
		dateStr: "2022-3",
		part1: async () => Day3.part1(await readInputFile("2022", "3")),
		part2: async () => Day3.part2(await readInputFile("2022", "3")),
	},
	{
		dateStr: "2022-4",
		part1: async () => Day4.part1(await readInputFile("2022", "4")),
		part2: async () => Day4.part2(await readInputFile("2022", "4")),
	},
	{
		dateStr: "2022-5",
		part1: async () => Day5.part1(await readInputFile("2022", "5")),
		part2: async () => Day5.part2(await readInputFile("2022", "5")),
	},
	{
		dateStr: "2022-6",
		part1: async () => Day6.part1(await readInputFile("2022", "6")),
		part2: async () => Day6.part2(await readInputFile("2022", "6")),
	},
	{
		dateStr: "2022-7",
		part1: async () => Day7.part1(await readInputFile("2022", "7")),
		part2: async () => Day7.part2(await readInputFile("2022", "7")),
	},
	{
		dateStr: "2022-8",
		part1: async () => Day8.part1(await readInputFile("2022", "8")),
		part2: async () => Day8.part2(await readInputFile("2022", "8")),
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

	const day = prompt("📅 Enter Day [1-25]:");
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
