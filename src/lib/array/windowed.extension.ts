declare global {
	interface Array<T> {
		windowed(size: number, step: number): T[][];
	}
}

Array.prototype.windowed = function <T>(size: number, step: number): T[][] {
	const result: T[][] = [];

	for (let i = 0; i < this.length; i += step) {
		const win = this.slice(i, i + size);
		result.push(win);
	}

	return result;
};

export {};
