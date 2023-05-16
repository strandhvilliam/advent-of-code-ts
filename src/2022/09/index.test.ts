import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { readTestInputFile } from "../../../utils.ts";
import { part1, part2 } from "./index.ts";

Deno.test(
    { name: "Day_9 part_1 test", permissions: { read: true } },
    async () => {
        const values = await readTestInputFile("2022", "9");
        assertEquals("88", part1(values));
    }
);

Deno.test(
    { name: "Day_9 part_2 test", permissions: { read: true } },
    async () => {
        const values = await readTestInputFile("2022", "9");
        assertEquals("36", part2(values));
    }
);
