import "../../lib/array.ts";

type TreeMap = number[][];
type TreeRow = number[];
type Position = [number, number];
type DirectionFunction = (pos: Position, map: TreeMap) => TreeRow;

const directions: DirectionFunction[] = [
	([x, y], [...treeMap]) =>
		treeMap
			.slice(0, y)
			.flatMap((r) => r[x])
			.reverse(),
	([x, y], treeMap) => [...treeMap.slice(y + 1)].flatMap((r) => r[x]),
	([x, y], treeMap) => [...treeMap[y].slice(0, x)].reverse(),
	([x, y], treeMap) => [...treeMap[y].slice(x + 1)],
];

export const part1 = (input: string[]) => {
	const treeMap: TreeMap = input.map((row) => row.split("").map(Number));

	const checkIfVisible = (
		[...treeRow]: TreeRow,
		[x, y]: Position
	): boolean => {
		return treeRow.every((val) => val < treeMap[y][x]);
	};

	const visibleTrees = treeMap.flatMap((row, y) =>
		row.map((_, x) =>
			directions
				.map((fn) => checkIfVisible(fn([x, y], treeMap), [x, y]))
				.reduce((acc, curr) => (curr ? acc + 1 : acc), 0)
		)
	);

	return visibleTrees.filter((tree) => tree).length.toString();
};

export const part2 = (input: string[]) => {
	const treeMap: TreeMap = input.map((row) => row.split("").map(Number));

	const countScenic = ([...treeRow]: TreeRow, [x, y]: Position): number => {
		const indexOfStopValue = treeRow.findIndex(
			(val) => val >= treeMap[y][x]
		);
		return indexOfStopValue !== -1
			? treeRow.slice(0, indexOfStopValue + 1).length
			: treeRow.length;
	};

	const visibleTrees = treeMap.flatMap((row, y) =>
		row.map((_, x) =>
			directions
				.map((fn) => countScenic(fn([x, y], treeMap), [x, y]))
				.reduce((acc, curr) => acc * curr)
		)
	);

	return Math.max(...visibleTrees).toString();
};
