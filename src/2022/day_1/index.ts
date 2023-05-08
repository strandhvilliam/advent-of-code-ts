import "../../lib/array.ts";

export const part1 = (input: string[]): string => {
	return Math.max(
		...input.splitByDelimiter("").map((arr) => arr.map(Number).sum())
	).toString();
};

export const part2 = (input: string[]): string => {
	return input
		.splitByDelimiter("")
		.map((arr) => arr.map(Number).sum())
		.sort((a, b) => a - b)
		.slice(-3)
		.sum()
		.toString();
};
