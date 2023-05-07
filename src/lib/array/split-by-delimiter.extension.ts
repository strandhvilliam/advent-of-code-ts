declare global {
	interface Array<T> {
		splitByDelimiter(delimiter: T): T[][];
	}
}

Array.prototype.splitByDelimiter = function <T>(delimiter: T): T[][] {
	return this.reduce(
		(acc, curr) => {
			if (curr === delimiter) {
				acc.push([]);
			} else {
				acc[acc.length - 1].push(curr);
			}
			return acc;
		},
		[[]] as T[][]
	);
};

export {}