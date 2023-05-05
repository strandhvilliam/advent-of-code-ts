import { assertEquals } from "https://deno.land/std@0.185.0/testing/asserts.ts";
import "./array.ts";

Deno.test("Array.intRange should return [2, 4, 6, 8]", () => {
	const result = Array.intRange(2, 8, 2);

	assertEquals([2, 4, 6, 8], result);
});

Deno.test("Array.prototype.mapToInt should return [1,2,3,4]", () => {
	const strArr = ["1", "2", "3", "4"];
	assertEquals([1, 2, 3, 4], strArr.mapToInt());
});

Deno.test("Array.prototype.mapToInt should return [1,2,3,4]", () => {
	const strArr = ["1", "2", "3", "4"];
	assertEquals([1, 2, 3, 4], strArr.mapToInt());
});

Deno.test(
	"Array.prototype.splitByDelimiter should return [['my', 'name'], ['is']]",
	() => {
		const strArr = ["my", "name", "-", "is"];
		assertEquals([["my", "name"], ["is"]], strArr.splitByDelimiter("-"));
	}
);

Deno.test(
	"Array.prototype.distinct should return ['aaa', 'aa', 'bb', 'cc']",
	() => {
		const strArray = ["aaa", "aaa", "aa", "bb", "bb", "cc"];

		assertEquals(["aaa", "aa", "bb", "cc"], strArray.distinct());
	}
);

Deno.test("Array.prototype.sum should return 12", () => {
	const intArray = [1, 4, 3, 2, 2];

	assertEquals(12, intArray.sum());
});

Deno.test(
	"Array.prototype.chunk should return [[1, 2], [1, 2], [1, 2]]",
	() => {
		const arr = [1, 2, 1, 2, 1, 2];

		assertEquals(
			[
				[1, 2],
				[1, 2],
				[1, 2],
			],
			arr.chunk(2)
		);
	}
);
