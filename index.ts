import * as Day1 from "./src/2022/day_1/index.ts";
import { readInputFile, readTestInputFile } from "./utils.ts";

const yearRegex = /^\d{4}$/;
const dayRegex = /^\d{1,2}$/;

type Stats = Map<string, string[]>;

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
