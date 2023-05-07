import "../../lib/array.ts";

type Crate = string;

type Stack = Crate[];

type Instruction = [number, number, number];

const rearrange = (
	input: string[],
	fn: (
		quantity: number,
		originStack: Stack,
		destStack: Stack
	) => [Stack, Stack]
) => {
	const cargoRows = input.splice(0, input.indexOf(""));
	const numberLine = cargoRows.splice(cargoRows.length - 1)[0].split("");
	const instructions = input
		.filter((line) => line.length)
		.map((instruction) =>
			instruction
				.split(" ")
				.filter((str: string) => /\d/.test(str))
				.mapToInt()
		) as Instruction[];

	const stacks: Stack[] = numberLine
		.map((position) => {
			const index = numberLine.indexOf(position);
			return cargoRows
				.map((row) => row[index])
				.filter((c) => /[A-Z]/.test(c))
				.reverse();
		})
		.filter((stack) => stack.length);

	instructions.forEach(([quantity, origin, destination]: Instruction) => {
		const [originStack, destinationStack] = fn(
			quantity,
			[...stacks[origin - 1]],
			[...stacks[destination - 1]]
		);
		stacks[origin - 1] = originStack;
		stacks[destination - 1] = destinationStack;
	});

	return stacks.map((stack) => stack[stack.length - 1]).join("");
};

export const part1 = (input: string[]) => {
	const fn = (
		quantity: number,
		originStack: Stack,
		destStack: Stack
	): [Stack, Stack] => {
		Array.intRange(0, quantity - 1).forEach(() => {
			const crate: Crate = originStack.pop() || "";
			crate && destStack.push(crate);
		});
		return [originStack, destStack];
	};

	return rearrange(input, fn);
};

export const part2 = (input: string[]) => {
	const fn = (
		quantity: number,
		originStack: Stack,
		destStack: Stack
	): [Stack, Stack] => {
		const crates: Crate[] = originStack.splice(
			originStack.length - quantity,
			quantity
		);
		destStack.splice(destStack.length, 0, ...crates);
		return [originStack, destStack];
	};

	return rearrange(input, fn);
};
