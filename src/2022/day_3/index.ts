import "../../lib/array.ts";

const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

export const part1 = (input: string[]) => {
	return input.reduce((sum, line) => {
		const bag = line.split("");
		const first = bag.slice(0, bag.length / 2);
		const second = bag.slice(bag.length / 2);

		return (
			first
				.filter((item) => second.includes(item))
				.distinct()
				.map((item) => alphabet.indexOf(item) + 1)
				.sum() + sum
		);
	}, 0).toString();
};

export const part2 = (input: string[]) => {
	return input.chunk(3).reduce((sum, group) => {
		const [first, second, third] = group.map((e) => e.split(""));

		return (
			first
				.filter((a) => second.includes(a))
				.filter((b) => third.includes(b))
				.distinct()
				.map((item) => alphabet.indexOf(item) + 1)
				.sum() + sum
		);
	}, 0).toString();
};

