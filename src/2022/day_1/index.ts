import { readInputFile } from "../../../utils.ts";

const calculateCalories = (
	remainingData: string[],
	result: number[]
): number[] => {
	if (remainingData.length === 0) return result;

	const currentIndex =
		remainingData.indexOf("") !== -1
			? remainingData.indexOf("")
			: remainingData.length;

	const calories = [...remainingData.slice(0, currentIndex)].reduce(
		(acc, cur) => acc + parseInt(cur),
		0
	);

	const nextIndex =
		remainingData.indexOf("") !== -1
			? remainingData.indexOf("") + 1
			: remainingData.length;

	return calculateCalories(
		[...remainingData.slice(nextIndex)],
		[...result, calories]
	);
};

export const part1 = (input: string[]): string => {
	return Math.max(...calculateCalories(input, [])).toString();
};

export const part2 = (input: string[]): string => {
	return calculateCalories(input, [])
		.sort((a, b) => a - b)
		.slice(-3)
		.reduce((total, n) => total + n)
		.toString();
};

part2(await readInputFile("2022", "1"));
