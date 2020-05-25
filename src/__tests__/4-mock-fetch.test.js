/**
 * Mock Fetch
 *
 * @group demo4
 * @group demo
 */

//  Fetch Mock
import fetch from "node-fetch";
jest.mock("node-fetch");
// Component to test
import { createUser } from "./utils/myComponent";

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
