declare global {
	interface Array<T> {
		distinct(): T[]
	}
}

Array.prototype.distinct = function<T>(): T[] {
    return [...new Set<T>(this)]
}

export {}