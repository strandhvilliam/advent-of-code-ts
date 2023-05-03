type Move = "A" | "B" | "C";
type Response = "X" | "Y" | "Z";

const scoreValues = {
	win: 6,
	draw: 3,
	lose: 0,
}

const moveScores: Record<Move, number> = { A: 1, B: 2, C: 3 };
const winnerMap: Record<Move, Move> = { A: "C", B: "A", C: "B" };
const loserMap: Record<Move, Move> = { A: "B", B: "C", C: "A" };
const responseMoveMap: Record<Response, Move> = { X: "A", Y: "B", Z: "C" };

export const part1 = (input: string[]) => {
	return input.reduce((acc: number, line: string) => {
		const [opponentMove, res] = line.split(" ") as [Move, Response]
		const playerMove: Move = responseMoveMap[res];

		switch (true) {
			case opponentMove === playerMove:
				return scoreValues.draw + moveScores[playerMove] + acc;
			case winnerMap[playerMove] === opponentMove:
				return scoreValues.win + moveScores[playerMove] + acc;
			default:
				return scoreValues.lose + moveScores[playerMove] + acc;
		}
	}, 0).toString();
};

export const part2 = (input: string[]) => {
	return input.reduce((acc: number, line: string) => {
		const [opponentMove, res] = line.split(" ") as [Move, Response]

		switch (res) {
			case "X":
				return scoreValues.lose + moveScores[winnerMap[opponentMove]] + acc;
			case "Y":
				return scoreValues.draw + moveScores[opponentMove] + acc;
			default:
				return scoreValues.win + moveScores[loserMap[opponentMove]] + acc;
		}
	}, 0).toString();
};

