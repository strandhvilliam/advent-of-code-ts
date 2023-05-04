declare global {
	interface Array<T> {
		sum(): number;
	}
}

Array.prototype.sum = function(): number {
    return this.reduce((acc, val) => acc + val, 0)
}

export {}