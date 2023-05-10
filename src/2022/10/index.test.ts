import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { readTestInputFile } from "../../../utils.ts";
import { part1, part2 } from "./index.ts";

Deno.test(
	{ name: "Day_10 part_1 test", permissions: { read: true } },
	async () => {
		const values = await readTestInputFile("2022", "10");
		assertEquals("13140", part1(values));
	}
);

Deno.test(
	{ name: "Day_10 part_2 test", permissions: { read: true } },
	async () => {

		const correct = "\n##::##::##::##::##::##::##::##::##::##::\n###:::###:::###:::###:::###:::###:::###:\n####::::####::::####::::####::::####::::\n#####:::::#####:::::#####:::::#####:::::\n######::::::######::::::######::::::####\n#######:::::::#######:::::::#######:::::\n"

		const values = await readTestInputFile("2022", "10");
		assertEquals(correct, part2(values));
	}
);