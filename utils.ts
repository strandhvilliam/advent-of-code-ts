export const readInputFile = async (year: string, day: string) => {
	const text = await Deno.readTextFile(`./src/${year}/${day}/input.txt`);
	return text.split("\n");
};

export const readTestInputFile = async (year: string, day: string) => {
	const text = await Deno.readTextFile(`./src/${year}/${day}/test.txt`);
	return text.split("\n");
};



/* export class CircularArray<T> {
	private _values: T[];

	constructor(values: T[]) {
		this._values = values;
	}

	get values() {
		return this._values;
	}

	get(index: number) {
		return this._values[index % this._values.length];
	}

	indexOf(val: T) {
		return this._values.indexOf(val);
	}

	set(index: number, value: T) {
		this._values[index % this._values.length] = value;
	}

	next(index: number) {
		if (index === this._values.length - 1) {
			return this._values[0];
		}
		return this._values[index + 1];
	}

	previous(index: number) {
		if (index === 0) {
			return this._values[this._values.length - 1];
		}
		return this._values[index - 1];
	}
} */
