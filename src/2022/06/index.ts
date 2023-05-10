import "../../lib/array.ts";

const packetSize = 4;
const messageSize = 14;

export const part1 = ([line]: string[]) => {
	return (
		line
			.split("")
			.windowed(packetSize, 1)
			.findIndex((w) => w.distinct().length === packetSize) + packetSize
	).toString();
};

export const part2 = ([line]: string[]) => {
	return (
		line
			.split("")
			.windowed(messageSize, 1)
			.findIndex((w) => w.distinct().length === messageSize) + messageSize
	).toString();
};
