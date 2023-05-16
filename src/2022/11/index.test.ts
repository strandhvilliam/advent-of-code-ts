import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { readTestInputFile } from "../../../utils.ts";
import { part1, part2 } from "./index.ts";

Deno.test(
	{ name: "Day_11 part_1 test", permissions: { read: true } },
	async () => {
		const values = await readTestInputFile("2022", "11");
		assertEquals("10605", part1(values));
	}
);

Deno.test(
	{ name: "Day_11 part_2 test", permissions: { read: true } },
	async () => {
		const values = await readTestInputFile("2022", "11");
		assertEquals("2713310158", part2(values));
	}
);
