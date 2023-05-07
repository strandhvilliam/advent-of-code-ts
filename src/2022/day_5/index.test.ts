import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { readTestInputFile } from "../../../utils.ts"
import { part1, part2 } from "./index.ts";

Deno.test({name: "Day_5 part_1 test", permissions: { read: true}}, async () => {
    const values = await readTestInputFile("2022", "5");
    assertEquals("CMZ", part1(values))
})

Deno.test({name: "Day_5 part_2 test", permissions: { read: true}}, async () => {
    const values = await readTestInputFile("2022", "5");
    assertEquals("MCD", part2(values))
})