/**
 * Integration of add function testing duplicateAddedValues function
 *
 * @group demo3
 * @group demo
 */

import { duplicateAddedValues } from "./utils/utils";

describe("mySimpleComponent", () => {
	it("adds the 2 values and returns double the result", () => {
		expect(duplicateAddedValues(2, 2)).toBe(8);
	});
});
