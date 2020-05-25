/**
 * Mock Fetch
 *
 * @group demo4
 * @group demo
 */

// Component to test
import { createUser } from "./utils/myComponent";

global.fetch = jest.fn();

describe("", () => {
	it("createUser calls fetch with the right args and returns the user id", async () => {
		fetch.mockReturnValue(Promise.resolve(new Response("4")));
		const userId = await createUser();
		expect(fetch).toHaveBeenCalledTimes(1);
		expect(fetch).toHaveBeenCalledWith("http://website.com/users", {
			method: "POST",
		});
		expect(userId).toBe("4");
	});
});
