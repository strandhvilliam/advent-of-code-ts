import "../../lib/array.ts";

interface Directory {
	name: string;
	totalFileSize: number;
	directories: Directory[];
}

const maxSize = 70000000;
	const requiredUnused = 30000000;

const fileSystem = (input: string[]) => {
	const rootDir: Directory = { name: "/", totalFileSize: 0, directories: [] };
	const fs: Directory[] = [rootDir];
	const stack: Directory[] = [rootDir];

	const generateFilesystem = (
		input: string[],
		fs: Directory[],
		stack: Directory[]
	) => {
		if (input.length === 0) return;
		const line = input[0];
		const currentDir = stack.at(-1)!;

		switch (true) {
			case line.startsWith("$ cd /"):
				stack.slice(1);
				break;
			case line.startsWith("$ cd .."):
				stack.pop();
				break;
			case line.startsWith("$ cd"):
				stack.push(
					currentDir.directories.find(
						(d) => d.name === line.split(" ").at(-1)
					)!
				);
				break;
			case line.startsWith("dir"):
				currentDir.directories.push({
					name: line.split(" ").at(-1)!,
					totalFileSize: 0,
					directories: [],
				});
				break;
			case /\d+/.test(line.split(" ")[0]):
				currentDir.totalFileSize += parseInt(line.split(" ")[0]);
				break;
		}

		generateFilesystem(input.slice(1), fs, stack);
	};
	generateFilesystem(input, fs, stack);
	return fs;
};

const getFileSizes = (dir: Directory, fn: (size: number) => void) => {
	let size = dir.totalFileSize;

	for (const d of dir.directories) {
		size += getFileSizes(d, fn);
	}

	fn(size);

	return size;
};

export const part1 = (input: string[]) => {
	const fs = fileSystem(input);
	const targetDirSizes: number[] = [];
	const fn = (size: number) => {
		if (size < 100000) targetDirSizes.push(size);
	};

	getFileSizes(fs[0], fn);

	return targetDirSizes.sum().toString();
};

export const part2 = (input: string[]) => {
	const fs = fileSystem(input);
	const allDirSizes: number[] = [];
    const fn = (size: number) => allDirSizes.push(size);

	getFileSizes(fs[0], fn);

	const required = Math.abs(
		maxSize - Math.max(...allDirSizes) - requiredUnused
	);

	const res = allDirSizes.filter((dir) => dir > required);
	return Math.min(...res).toString();
};
