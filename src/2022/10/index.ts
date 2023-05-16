import { readInputFile, readTestInputFile } from "../../../utils.ts";
import "../../lib/array.ts";

type Result = string[][] | number[];

type SolveFunction = (xCount: number, cycles: number, result: Result) => Result;

interface ReduceObject {
  c: number;
  res: Result;
}

const loopRec = (
  input: string[],
  xCount: number,
  cycles: number,
  result: Result,
  fn: SolveFunction,
): Result => {
  if (input.length === 0) return result;

  const [cmd, value] = input[0].split(" ");
  const loops = cmd === "noop" ? 1 : 2;

  const { c: updatedCycles, res: updatedRes } = [...Array(loops)].reduce(
    ({ c, res }: ReduceObject, _) => {
      return { c: c + 1, res: fn(xCount, c + 1, res) };
    },
    { c: cycles, res: result },
  );

  const updatedXCount = value ? xCount + +value : xCount;
  return loopRec(input.splice(1), updatedXCount, updatedCycles, updatedRes, fn);
};

export const part1 = (input: string[]) => {
  const checkStops = [20, 60, 100, 140, 180, 220];

  const fn: SolveFunction = (xCount, cycleCount, result): Result =>
    checkStops.includes(cycleCount)
      ? [...result, xCount * cycleCount] as Result
      : result;

  return loopRec(input, 1, 0, [], fn).sum().toString();
};
export const part2 = (input: string[]) => {
  const fn: SolveFunction = (xCount, cycleCount, result) => {

    const checkArr = [xCount - 1, xCount, xCount + 1];
    const lastRow = result[result.length - 1] as string[];
    const newRow = [...lastRow, checkArr.includes(lastRow.length) ? "#" : ":"]
    const updatedResult = [...result.slice(0, -1), newRow] as string[][];
    
    if (cycleCount % 40 === 0) return [...updatedResult, []]
    return updatedResult
  };

  const final = loopRec(input, 1, 0, [[]], fn) as string[][];
  return "\n" + final.map((r) => r.join("")).join("\n")

};