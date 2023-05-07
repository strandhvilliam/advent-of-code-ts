import "../../lib/array.ts";

const countOverlap = (
	input: string[],
	fn: (first: number[], second: number[]) => boolean
) => {
	return input.reduce((count, line) => {
		const [first, second] = line
			.split(",")
			.map((e) => e.split("-").mapToInt())
			.map((x) => Array.intRange(x[0], x[1], 1));

		return count + (fn(first, second) ? 1 : 0);
	}, 0);
};

export const part1 = (input: string[]) => {
	return countOverlap(
		input,
		(first, second) =>
			first.every((n) => second.includes(n)) ||
			second.every((n) => first.includes(n))
	).toString();
};

export const part2 = (input: string[]) => {
	return countOverlap(
		input,
		(first, second) =>
			first.some((n) => second.includes(n)) ||
			second.some((n) => first.includes(n))
	).toString();
};
