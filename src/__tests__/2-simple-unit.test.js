/**
 *
 * Tests for add function
 *
 * @group demo2
 * @group demo
 */

import { add } from "./utils/utils";

describe("add", () => {
	test("can add 2 numeric values", () => {
		const myResult = add(2, 2);
		expect(myResult).toBe(4);
	});

	test("returns a number type and not a string", () => {
		const myResult = add(2, 2);
		expect(myResult).not.toBe("4");
	});

	test("can add 2 numeric values passed as string", () => {
		const myResult = add("2", "2");
		expect(myResult).toBe(4);
	});

	test("can not add 2 string values", () => {
		const myResult = add("2a", "2");
		expect(myResult).not.toBe(4);
		expect(myResult).toBeNaN();
	});
});
