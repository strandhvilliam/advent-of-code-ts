declare global {
	interface Array<T> {
		mapToInt(): number[]
	}
}

Array.prototype.mapToInt = function(): number[] {
    return this.map((val: string) => parseInt(val))
}

export {}