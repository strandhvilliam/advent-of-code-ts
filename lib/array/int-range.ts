
declare global {
	interface ArrayConstructor {
		intRange(start: number, stop: number, step?: number): number[];
	}
}

Array.intRange = (start, stop, step) =>
	Array.from(
		{ length: (stop - start) / (step ?? 1) + 1 },
		(_, index) => start + index * (step ?? 1)
	);

export {};

