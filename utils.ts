export const readInputFile = async (year: string, day: string) => {
	const text = await Deno.readTextFile(`./src/${year}/day_${day}/input.txt`);
	return text.split("\n");
};

export const readTestInputFile = async (year: string, day: string) => {
	const text = await Deno.readTextFile(`./src/${year}/day_${day}/test.txt`);
	return text.split("\n");
};
