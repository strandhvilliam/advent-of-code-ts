import "../../lib/array.ts";

type Direction = "U" | "D" | "L" | "R";

type Knot = [number, number];
type Rope = Knot[];

type HeadMovesMap = {
  [key in Direction]: (knot: Knot) => Knot;
};

const moveTail = ([headX, headY]: Knot, [tailX, tailY]: Knot) => {
  return Math.abs(headX - tailX) <= 1 && Math.abs(headY - tailY) <= 1
    ? ([tailX, tailY] as Knot)
    : ([
      tailX + Math.sign(headX - tailX),
      tailY + Math.sign(headY - tailY),
    ] as Knot);
};

const headMoves: HeadMovesMap = {
  U: ([x, y]) => [x - 1, y],
  D: ([x, y]) => [x + 1, y],
  L: ([x, y]) => [x, y - 1],
  R: ([x, y]) => [x, y + 1],
};

const run = (ropeLength: number, input: string[]) => {
  const rope: Rope = Array(ropeLength).fill([0, 0]);

  const instructions = input.map((line) => {
    const [direction, iterations] = line.split(" ");
    return { direction: direction as Direction, iterations: +iterations };
  });

  return instructions.reduce((tailPositions: string[], { direction, iterations }, ) => 
    [...tailPositions, ...Array(iterations).fill(0).map(() => {
        const [headX, headY] = rope[0];
        const [newHeadX, newHeadY] = headMoves[direction]([headX, headY]);
        rope.forEach((knot, index) => {
          index === 0
            ? rope[index] = [newHeadX, newHeadY]
            : rope[index] = moveTail(rope[index - 1], knot);
        });
        return (rope[rope.length - 1].join("-"));
      }),
    ], []).distinct().length.toString();
};

export const part1 = (input: string[]) => run(2, input);
export const part2 = (input: string[]) => run(10, input);

