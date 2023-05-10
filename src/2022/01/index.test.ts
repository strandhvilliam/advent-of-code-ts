import { readInputFile, readTestInputFile } from "../../../utils.ts";
import { part1, part2 } from "./index.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

Deno.test({ name: "part1", permissions: { read: true } }, async () => {
	const values = await readTestInputFile("2022", "1");

	assertEquals("24000", part1(values));
});

Deno.test({name: "part2", permissions: { read: true }}, async () => {
    const values = await readTestInputFile("2022", "1");

    assertEquals("45000", part2(values));
})

